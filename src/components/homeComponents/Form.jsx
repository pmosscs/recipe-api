import React from "react";
import { BiSearch } from 'react-icons/bi';

function Form({searchInputReturn}) {

return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-search">
            <BiSearch size="30px" color="#CD7941" />
            <input placeholder="Search for a Recipe" type="text" onChange={(e) => {
                searchInputReturn(e.target.value);
            }} />
        </div>
    </form>
)
}

export default Form;