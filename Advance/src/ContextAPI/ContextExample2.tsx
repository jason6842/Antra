import React, { createContext, useContext, useState } from "react";

type AppContextType = {
    userName: string;
    setUserName: (userName: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const Parent = () => {
    const [userName, setUserName] = useState("PedroTech");
    
    return (
        <AppContext.Provider value={{ userName, setUserName }}>
            <Child1 />
            <Child2 />
        </AppContext.Provider>
    )
}

export const Child1 = () => {
    const context = useContext(AppContext);
    
    if (!context) {
        return;
    }

    const { userName } = context;

    return <h1> {userName}</h1>;
};

export const Child2 = () => {
    const context = useContext(AppContext);
    
    if (!context) {
        return;
    }

    const { setUserName } = context;
    return (
        <div>
            <button 
                onClick={() => {
                    setUserName("PedroTechnologies");
                }}
            >
                Set UserName
            </button>
        </div>
    )
}