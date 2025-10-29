import React from 'react'

export default function PageTitle({ title, className = '' }) {
  return (
    <div className="mb-12">
			<h1 className={`text-4xl font-dosis text-blue-950 mb-4 ${className}`}>{title}</h1>
			<div className="h-[3px] w-full bg-yellow-500 mx-auto" />
    </div>
  )
}