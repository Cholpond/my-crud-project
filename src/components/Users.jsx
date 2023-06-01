import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import { useState, useEffect } from "react";
import UsersTable from "./UsersTable";
import axios from "axios";
import Search from "./Search";
import Loader from "./Loader";

const url = "https://646d26b57b42c06c3b2ca114.mockapi.io/api/v1/users/users"

const Users = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const fetchUsers = async () => {
        setLoading(true)
        try{
            const {data} = await axios.get(url);
            setUsers(data);
        }catch(error){
            console.log(error)
        }finally{
            console.log("final block")
        }
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    useEffect( () =>{
            fetchUsers()
        }, [])
    
    const filteredUsers = users.filter(user => {
        return user.firstname.toLowerCase().includes(searchQuery.toLowerCase())
    });

    const deleteUser = async (id) => {
        try{
            await axios.delete(`${url}/${id}`)
            const filteredUsers = users.filter(user => user.id !== id);
            setUsers(filteredUsers);

        }catch(error){
            console.log(error);
            setErrorMessage(error.message)
        }finally{
            setTimeout(()=>{
                setLoading(false)
            }, 1500)
        }
    };

    const updateUser = async (id) => {
        try{
            await axios.delete(`${url}/${id}`)
            const filteredUsers = users.filter(user => user.id !== id);
            setUsers(filteredUsers);

        }catch(error){
            console.log(error);
            setErrorMessage(error.message)
        }finally{
            setTimeout(()=>{
                setLoading(false)
            }, 1500)
        }
    }
    return(
        <>
            <Container>
                {loading ? (<Loader/> 
                ) : ( 
            <>
            <Row className="mb-3 mt-3">
            <Search handleSearch={handleSearch}/>
            <Col className="text-end">
            <button>Create a User</button>
            </Col>
            </Row>
            <UsersTable 
            errorMessage={errorMessage}
            users={users} deleteUser={deleteUser}/>
            </>
            )}
        </Container>
        </>
    )
}

export default Users;