import React, { createContext, SetStateAction, useContext, useState } from "react";
import UserContext from "./UserContext";

type AppContextType = {
    userName: string;
    setUserName: React.Dispatch<SetStateAction<string>>;
    count: number;
    setCount: React.Dispatch<SetStateAction<number>>;
}

const AppContext = createContext<AppContextType | null>(null);

export const Parent = () => {
    const [userName,setUserName] = useState("PedroTech");
    const [count, setCount] = useState(0);

    // ALL COMPONENTS WILL RERENDER IF ANY OF THE FOLLOWING COMPONENTS ARE UPDATED
    return (
        <AppContext.Provider value={{ userName, setUserName, count, setCount }}>
            <Child1 />
            <Child2 />
            <Child3 />
            <Child4 />

        </AppContext.Provider>
    )
}

export const Child1 = () => {
    const context = useContext(AppContext);

    if (!context) {
        return;
    }

    const { userName } = context;

    return <h1>{userName}</h1>
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
};

export const Child3 = () => {
    const context = useContext(AppContext);

    if (!context) {
        return;
    }

    const { count } = context;

    return <h1>{count}</h1>
}

export const Child4 = () => {
    const context = useContext(AppContext);
    
    if (!context) {
        return;
    }

    const { setCount } = context;
    return (
        <div>
            <button 
                onClick={() => {
                    setCount((prev) => prev + 1);
                }}
            >
                Increment Count
            </button>
        </div>
    )
};