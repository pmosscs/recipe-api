import React, { useState } from "react";

function Form() {
    const [search, setSearch] = useState("")

return (
    <form>
        <div>
            <input placeholder="Search for a Recipe" type="text" value={search} onChange={(e) => {
                console.log(e.target.value)
                setSearch(e.target.value)
                
            }} />
        </div>
    </form>
)
}

export default Form;