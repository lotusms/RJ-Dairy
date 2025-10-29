export default function SectionHeading({ 
  children, 
  className = "",
  bgColor = "blue-800",
  triangleSize = "20px"
}) {
  // Color mapping to ensure triangle matches heading background
  const getColorValue = (color) => {
    const colorMap = {
      'blue-800': '#1e40af',
      'blue-600': '#2563eb',
      'blue-700': '#1d4ed8',
      'red-600': '#dc2626',
      'red-700': '#b91c1c',
      'green-500': '#22c55e',
      'green-600': '#16a34a',
      'purple-700': '#7c3aed',
      'gray-800': '#1f2937',
      'gray-700': '#374151'
    }
    return colorMap[color] || '#1e40af' // fallback to blue-800
  }

  return (
    <div className="relative">
      <h2 className={`text-4xl font-dosis bg-${bgColor} text-white py-8 mb-12 text-center ${className}`}>
        {children}
      </h2>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
        <div 
          className="w-0 h-0 border-l-transparent border-r-transparent"
          style={{
            borderLeftWidth: triangleSize,
            borderRightWidth: triangleSize,
            borderTopWidth: triangleSize,
            borderTopColor: getColorValue(bgColor)
          }}
        ></div>
      </div>
    </div>
  )
}
