import React from 'react'

const SectionTitle = ({ title }) => {
  return (
    <div className="mb-4">
      <h2>
        {title}
      </h2>
      <div style={{ background: '#0677D4', width: '15%', height: 2 }}></div>
    </div>
  )
}

export default SectionTitle