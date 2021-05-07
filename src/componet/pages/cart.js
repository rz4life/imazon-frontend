import { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Cart = (props) =>{


    

    return(

        <div className = 'cartpage'>
            {
                props.cart.map((item, i) =>(
                    <div className = 'cartproduct' key = {i}>

                        <h4>{item.name}</h4>
                        <h4>{item.price}</h4>
                        <h4>{item.image}</h4>
                        <button onClick = {() =>{
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