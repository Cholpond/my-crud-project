import React, { useState } from "react";
import { Row, Col, Button} from "react-bootstrap";

const Search = ({ handleSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = () => {
        e.preventDefault();
        handleSearch(query)
    };

    const handleInputChange = () => {
        setQuery(e.target.value)
    }

    return(
        <Col className="text-start">
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-auto">
                    <input type="text" placeholder="Search" className="form-control" onChange={handleInputChange} value={query}/>
                </div>
                <div className="col-auto">
                    <Button>Create a User</Button>
                </div>
                <div className="col-auto">
                    <Button onClick={handleSubmit}>Search</Button>
                </div>
            </form>
            </Col>
    )
}

export default Search;