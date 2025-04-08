import { useEffect, useState } from "react";

// Higher Order components takes in another component as argument
// The reason why custom hooks are better than HOC because if you use multiple HOCs for each component, you will have something similar to callback hell, where it is nested HOCs for each component. HOC hell

// HOC is not a feature of React, but rather a pattern (a way of writing code)
const withFetch = (WrappedComponent: any, api: string) => {
    const WithFetchComponent = (props: any) => {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(null);
        const [isRefetching, setIsRefetching] = useState(false);
        useEffect(() => {
            setIsLoading(true);
            fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
        }, []);

        const refetch = () => {
            setIsRefetching(true);
            fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setIsRefetching(false);
            })
        }
        return (
            <div style={{border: "1px solid black"}}>
                <WrappedComponent data={data} loading={isLoading} error={error} refetch={refetch} isRefetching={isRefetching} {...props} />
            </div>
        )
    }
    return WithFetchComponent;
}

export default withFetch;