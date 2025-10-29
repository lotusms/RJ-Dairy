export default function SubmitButton({ 
  children, 
  className = '', 
  onClick,
  disabled = false,
  loading = false,
  icon = null,
  iconPosition = 'left',
  type = 'submit',
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center bg-blue-800 hover:bg-blue-700 text-white font-barlow uppercase px-6 py-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  const combinedClasses = `${baseClasses} ${className}`

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {children}
        </>
      )
    }

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

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
      {...props}
    >
      {renderContent()}
    </button>
  )
}
