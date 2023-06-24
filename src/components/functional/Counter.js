import { useState, useEffect } from "react";

const Counter = () => {
    const [ angka, setAngka ] = useState(0);

    function updateAngka(amount) {
        setAngka(angka + amount)
    }

    useEffect(() => {
        console.log("Mounting")

        document.title = "Angka: " + angka;
    }, [angka])

    console.log("Component di render")

    return (
        <div>
            <p>Result: {angka}</p>
            <button onClick={() => updateAngka(1)}>CLICK HERE</button>
        </div>
    )
}

export default Counter;
