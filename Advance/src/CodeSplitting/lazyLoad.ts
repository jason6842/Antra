import React from "react";

export function lazyLoad(path: string, namedExport: any) {
    return React.lazy(() => {
        const promise = import(path);
        if (namedExport === null) {
            return promise;
        } else {
            return promise.then((module: any) => ({ default: module[namedExport] }))
        }
    })
}

// lazyLoad("./components/About", "About");