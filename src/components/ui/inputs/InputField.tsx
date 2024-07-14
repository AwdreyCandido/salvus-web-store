import React from 'react'

const InputField = () => {
  return (
    <div className='flex gap-2 my-4 flex-col font-sora text-text'>
      <label className='text-h4'>Label</label>
      <input className='h-[4rem] px-4 py-2 rounded-xl outline-0 border-2 border-primary-light ring-primary' placeholder='Placeholder...' />
    </div>
  )
}

export default InputField