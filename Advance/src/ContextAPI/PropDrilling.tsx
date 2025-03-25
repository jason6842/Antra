import React, { useState } from 'react'

export const Parent = () => {
    const [userName, setUserName] = useState("PedroTech");

    return (
        <div>
            {userName}
            <Child setUserName={setUserName} />
        </div>
    )
}

export const Child = ({ setUserName }: any) => {
    return <Grandchild setUserName={setUserName} />
}

export const Grandchild = ({ setUserName }: any) => {
    return (
        <div>
            <button
            onClick={() => {
                setUserName("PedroTechnologies");
            }}>
                Change Username
            </button>
        </div>
    )
}