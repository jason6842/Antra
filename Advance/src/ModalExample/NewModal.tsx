import React from 'react'
import { createPortal } from 'react-dom'


const MODAL_STYLES: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLE: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}


export default function NewModal({open, children, onClose}: any) {
  if (!open) return null
  return createPortal(
    <>
      <div style={OVERLAY_STYLE}></div>
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.body
  )
  // portal is located in index.html
}
