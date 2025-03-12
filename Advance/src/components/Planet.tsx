function Planet() {
    const planets = [
        { name: "Mars", isGasPlanet: false},
        { name: "Earth", isGasPlanet: false},
        { name: "Jupiter", isGasPlanet: true},
        { name: "Venus", isGasPlanet: false},
        { name: "Neptune", isGasPlanet: true},
        { name: "Uranus", isGasPlanet: true},
    ]
    // { } requires a return
    // no { }  is a one liner
    return (
        <div>
            {planets.map((planet, key) => {
                //    if (planet.isGasPlanet) return <h3>{planet.name}</h3>
                    return planet.isGasPlanet && <div>{planet.name}</div>
                }
            )}
        </div>
    );
}

export default Planet;