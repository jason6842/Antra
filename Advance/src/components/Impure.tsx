let guest = 0;

function Cup() {
    // Bad: changing a preexisting variable!
    guest = guest + 1
    return <h2>Tea cup for #{guest}</h2>
}

function PureCup({correctGuest}: any) {
    return <h2>Tea cup for #{correctGuest}</h2>
}

export default function Impure() {
    // Increments guest by 1 each time the Cup component is called so it is impure
    return (
        <>
            <Cup/> 
            <Cup/>
            <Cup/>

            <PureCup correctGuest={1}/>
            <PureCup correctGuest={2}/>
            <PureCup correctGuest={3}/>
            

        </>
    )
}