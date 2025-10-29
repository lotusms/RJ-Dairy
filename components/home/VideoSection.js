import Video from '@/components/ui/Video'

export default function VideoSection() {
  return (
    <section className="border-t-4 border-b-4 border-blue-800">
      <div className="w-full">
        <div className="aspect-video bg-gray-300 overflow-hidden">
          <Video 
            src="https://www.youtube-nocookie.com/embed/SyhzaNuloCE?showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="R&J Dairy Video"
            isYouTube={true}
          />
        </div>
      </div>
    </section>
  )
}
