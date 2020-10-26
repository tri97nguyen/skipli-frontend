import React, { useState, useEffect } from "react";

const Form = (props) => {
    const [phone, setPhone] = useState("");
    const [nonce, setNonce] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/message")
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (
        <form onSubmit={(e) => handdleSubmit(e)}>
            <label htmlFor="phone">
                phone
          <input
                    id="phone"
                    value={phone}
                    placeholder="phone"
                    onChange={(e) => setPhone(e.target.value)}
                />
            </label>

            <label htmlFor="nonce">
                nonce
            <input
                    id="nonce"
                    value={nonce}
                    placeholder="nonce"
                    onChange={(e) => setNonce(e.target.value)}
                />

            </label>
            <button>submit</button>
        </form>
    )
}

const handdleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    // fetch("http://127.0.0.1:3000", {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({  })
    // })
    //     .then(res => res.json())
    //     .then(data => console.log(data))


}
export default Form;