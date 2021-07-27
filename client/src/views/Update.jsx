import React, { useEffect, useState } from "react";
import axios from "axios";
import {navigate} from "@reach/router";

export default (props) => {
    const { id } = props;
    const [price, setPrice] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id).then((res) => {
            setTitle(res.data.Product.title);
            setPrice(res.data.Product.price);
            setDescription(res.data.Product.description);
        });
    }, [id]);

    const updateProduct = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/products/update/" + id, {
                title,
                price,
                description,
            })
            .then(res => navigate(`/products/${id}`))
            .catch((err) => console.log(err));
    };

    const deleteProduct =(e)=>{
        axios.delete("http://localhost:8000/api/products/delete/" + id)
            .then(res=>{
                console.log(res)     
                navigate("/")
            })
            .catch(err=> console.log("error", err))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <label>Price</label>
                    <br />
                    <input
                        type="text"
                        name="price"
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <label>Description</label>
                    <br />
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                </p>
                <input type="submit" />
                <button onClick= {deleteProduct}>Delete</button>
            </form>
        </div>
    );
};