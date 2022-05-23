import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import {navigate} from '@reach/router';

const ProductList = (props) => {
    const deleteProduct=(e, id )=>{
        console.log("delete product initiated")
        console.log(id)
        axios.delete("http://localhost:8000/api/products/delete/" + id)
            .then(res=>{
                console.log(res)
                // setDeleteClicked(!deleteclicked)
                navigate("/")
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            {props.products.map((product, index) => {
                return <div>
                    <p key={index}>
                        <a href={`/products/${product._id}`}>{product.title}</a>
                        <button onClick={(e)=>deleteProduct(e, product._id)}>Delete</button>
                    </p>
                </div>
            })}
        </div>
    )
}

export default ProductList;