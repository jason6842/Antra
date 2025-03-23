import React, { ChangeEvent } from 'react'

interface PasswordProps {
    label: string,
    required?: boolean,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({ label, required = false, value, onChange }: PasswordProps) {
  return (
    <div>
        <label >
        {label}: <input type="password" required={required} value={value} onChange={onChange}/>
        </label>
    </div>
    )
}
