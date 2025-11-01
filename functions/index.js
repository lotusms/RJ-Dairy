/*
  Cloud Function to send emails via Office365 using Nodemailer when a new document
  is created in the Firestore `mail` collection. Compatible with the current
  ContactForm payload shape:
  {
    to: ["sales@rjdairy.com"],
    cc: ["someone@example.com"], // optional, can also be a string
    replyTo: "sender@example.com", // optional
    message: {
      subject: "...",
      text: "...",
      html: "..."
    }
  }
*/

const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { setGlobalOptions } = require("firebase-functions/v2");
const nodemailer = require("nodemailer");

// Explicitly connect to the correct project and multi-region Firestore instance
const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");

admin.initializeApp({
  projectId: "rjdairy-869f5"
});

// Get Firestore instance - this ensures the Admin SDK registers the right Firestore instance
// so Firebase CLI's validation passes for nam5 multi-region
const db = getFirestore();

// Optional: enforce region and function limits
setGlobalOptions({ region: "us-east4", memory: "256MiB", timeoutSeconds: 60 });

// Office365 SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "payables@rjdairy.com",
    pass: process.env.SMTP_PASS,
  },
  tls: {
    ciphers: "TLSv1.2",
  },
  pool: true,
});

exports.sendEmail = onDocumentCreated("mail/{docId}", async (event) => {
  const data = event.data?.data();
  if (!data) return;

  // Support both root-level fields and nested message fields
  const to = Array.isArray(data.to) ? data.to : (data.to ? [data.to] : []);
  const cc = Array.isArray(data.cc) ? data.cc : (data.cc ? [data.cc] : undefined);

  const subject = data.subject || data.message?.subject || "New Message";
  const text = data.text || data.message?.text || undefined;
  const html = data.html || data.message?.html || undefined;

  if (!to.length || (!text && !html)) {
    console.warn("Skipping email: missing recipients or body", { toLength: to.length, hasText: !!text, hasHtml: !!html });
    return;
  }

  const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER || "payables@rjdairy.com";

  const mailOptions = {
    from: fromAddress,
    to,
    cc,
    replyTo: data.replyTo || undefined,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent", { to, messageId: info.messageId });
  } catch (error) {
    console.error("❌ Email failed", error);
    // Optionally write an error status back to the document
    // await event.data.ref.update({ status: 'error', error: String(error) }).catch(() => {});
  }
});

// (Removed conflicting v1 template block. This file uses the v2 Functions API.)
