import React, { createContext, useState, useContext } from 'react'

type AppContextType = {
    userName: string
    setUserName: (userName: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const Parent = () => {
    const [userName, setUserName] = useState("PedroTech");

    return (
        <AppContext.Provider value={{userName, setUserName}}>
            <div>
                {userName}
                <Child />
            </div>
        </AppContext.Provider>
    )
}

export const Child = () => {
    return <Grandchild />
}

export const Grandchild = () => {
    const context = useContext(AppContext);
    // checks if context is null, which prevents destructuring
    if (!context) {
        return;
    }
    const { setUserName } = context; // destructuring

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