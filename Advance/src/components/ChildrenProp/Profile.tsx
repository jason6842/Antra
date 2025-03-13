function Card ({children}: any) {
    return (
        <div className="card">
            <div className="card-content">
                { children }
            </div>
        </div>
    )
}

export default function Profile() {
    return (
        <div>
            <Card>
                <h1>Photo</h1>
            </Card>
            <Card>
                <h1>Photo #2 </h1>
            </Card>
        </div>
    )
}
