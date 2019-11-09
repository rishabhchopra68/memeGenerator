import React from 'react'

function Product(props) {
    return (
        <div>
            <br></br>
            <p>Name: {props.product.name}</p>
            <p>Price: {props.product.price}</p>
            <p>Description: {props.product.description}</p>
            <br></br>
            <hr />
        </div>
    )
}

export default Product