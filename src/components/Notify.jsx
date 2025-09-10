import React, { useEffect } from 'react'

const Notify = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  const bgColor =
    type === 'success'
      ? 'bg-green-500'
      : type === 'error'
      ? 'bg-red-500'
      : 'bg-yellow-500'

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} text-white px-4 py-3 rounded shadow-lg`}
    >
      {message}
      <button className='ml-4 font-bold' onClick={onClose}>
        ×
      </button>
    </div>
  )
}

export default Notify
