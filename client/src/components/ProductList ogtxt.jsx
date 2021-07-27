import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const ProductList = () => {
    const [productList, setProductList] = useState([])
    const [deleteclicked, setDeleteClicked] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/")
        .then(res => {
            console.log("UseEffect in effect", res)
            setProductList(res.data.results)
        
        })
        .catch(err=> console.log("axios call didnt work", err))
    }, [deleteclicked])
    

    const deleteProduct=(e, id )=>{
        console.log("delete product initiated")
        console.log(id)
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res=>{
                console.log(res)
                setDeleteClicked(!deleteclicked)
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            <h1>All available products:</h1>
            {productList.map((product, index) => {
                return <div key={index}>
                    <p key={index}>
                    <p><Link to={"/products/edit/" + product._id}>Edit</Link></p>
                    <p><Link to={"/products/"}>Back</Link></p>
                        <button onClick={(e)=>deleteProduct(e, product._id)} className="btn btn-danger">Delete</button>
                    </p>
                </div>
            })}
        </div>
    );
};

export default ProductList;

import React from 'react';