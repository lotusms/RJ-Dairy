import Link from 'next/link'

export default function PrimaryButton({ 
  href, 
  children, 
  className = '', 
  onClick,
  external = false,
  icon = null,
  iconPosition = 'left',
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center bg-blue-800 hover:bg-gray-700 text-white font-barlow uppercase px-6 py-3 rounded-full transition-colors"
  const combinedClasses = `${baseClasses} ${className}`

  const renderContent = () => {
    if (!icon) return children
    
    const iconElement = <span className="inline-block">{icon}</span>
    
    if (iconPosition === 'right') {
      return (
        <>
          {children}
          <span className="ml-1.5">{iconElement}</span>
        </>
      )
    }
    
    return (
      <>
        {iconElement}
        <span className="ml-1.5">{children}</span>
      </>
    )
  }

  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        {...props}
      >
        {renderContent()}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {renderContent()}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {renderContent()}
    </button>
  )
}
