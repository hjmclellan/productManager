import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

export default props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/create', {
            title,
            price,
            description,
        })
            .then(res=> {
                console.log(res);
                if(res.data.results){
                    navigate(`/products/${props.id}`);
                }else{
                    console.log("Gotta fill that out buddy")
                }
            })
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {e => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange = {e => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {e => setDescription(e.target.value)} />
            </p>
            <input type="submit" value="Submit"/>
        </form>
    )
}