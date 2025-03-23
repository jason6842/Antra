import React, { ChangeEvent } from 'react'

interface EmailProps {
  label: string,
  required?: boolean,
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function EmailInput({label, required = false, value, onChange}: EmailProps) {
  return (
    <div>
        <label >
        {label}: <input type="email" required={required} value={value} onChange={onChange}/>
        </label>
    </div>
  )
}
