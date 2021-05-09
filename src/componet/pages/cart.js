import { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Cart = (props) =>{

    const removeitem = (cartId, productId) =>{

        axios.delete (`${process.env.REACT_APP_BACKEND_URL}/carts/${cartId}/products/${productId}`).then((response) =>{
            console.log(response)
        })

    }
    // useEffect(removeitem, [props.cart])


    

    return(

        <div className = 'cartpage'>
            {
                props.cart.map((item, i) =>(
                    <div className = 'cartproduct' key = {i}>

                        <h4>{item.name}</h4>
                        <h4>{item.price}</h4>
                        <img src = {`images/${item.image}`}/>
                        <button onClick = {() =>{
                        removeitem (item.cartItems.cartId, item.cartItems.productId)
                        }}>Remove Item</button>
                      <br/>
                      <br/>
                    </div>
                ))
            }
                      <br/>
                      <br/>
                      <Link to = '/checkout'>
                       <button onClick = {() =>{
                        }}>Proceed to checkout</button>
                      </Link> 
        </div>
    )

}

export default Cart