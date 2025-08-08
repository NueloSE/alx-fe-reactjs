import { useState } from "react"

function Search () {
    const [username, setUsername] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        setUsername('')
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="username">Github Username</label>
                <input id="username" type="text" placeholder="Enter a valid github Username"  onChange={(e) => setUsername(e.target.value)} value={username}/>
            </form>
        </div>
    )
}

export default Search
