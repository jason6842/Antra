import React, { useState } from 'react'
import BadModal from './BadModal'
import OldModal from './OldModal';
import NewModal from './NewModal';

const BUTTON_WRAPPER_STYLES: React.CSSProperties = {
    position: 'relative',
    zIndex: 1
}

const OTHER_CONTENT_STYLES: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
}

export default function ModalApp() {
  const [isOpen, setOpen] = useState(false);
  // child component modal has event delegation built in for all the events to delegate up to the modal's parent
  return (
    <>
        <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
            <button onClick={() => setOpen(true)}>Open Modal</button>
            <NewModal open={isOpen} onClose={() => setOpen(false)}>
              Fancy Modal
            </NewModal>
        </div>

        <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  )
}
