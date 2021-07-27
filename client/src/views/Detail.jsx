import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';

export default props => {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(response => {
                const prodFromServer = response.data.Product;
                console.log(response.data.Product)
                setProduct(prodFromServer);
            });
    }, [])

    const deleteProduct =(e, id)=>{
        console.log(id)
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res=>{
                console.log(res)     
                navigate("/")
            })
            .catch(err=> console.log("error", err))
    }

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p><Link to={"/products/edit/" + product._id}>Edit</Link></p>
            <p><Link to={"/products/"}>Back</Link></p>
            <button onClick={(e)=>deleteProduct(e, product._id)}>Delete</button>
        </div>
    )
}