import axios from "axios"
import { useEffect, useState } from 'react';
import { Redirect } from "react-router";


const Checkout = (props) =>{
    const arr = []
     let totalnumber = 0
     const[totalValue,setTotalValue] =useState (0)
     const [order,setOrder] = useState()

    const palceOrder = () =>{
        const userId = localStorage.getItem('userId') 
        const cartId = localStorage.getItem('cartId')
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/orders/${userId}/${cartId}`)
        .then((response) =>{
            console.log(response)
            setOrder(response.data)
            localStorage.removeItem('cartId')
        })
        return<Redirect to = '/login'/>
    }
    const total = ( ) =>{

        for (let i = 0 ; i < arr.length; i++){
            
             totalnumber += Number(arr[i])
            console.log(arr)
            console.log(totalValue)
            
            
        }
        setTotalValue(totalnumber)
    } 
    useEffect(total, [])

    return(
        <div>
            <h2>Shipping Information</h2>
            <h5>{props.user.name}</h5>
            <h5>{props.user.email}</h5>
            <h5>{props.user.userAddress}</h5>
            <h5>{props.user.userCity}</h5>
            <h5>{props.user.userZipcode}</h5>

            <h2>Card Information</h2>
            <h5>{props.user.cardName}</h5>
            <h5>{props.user.cardNumber}</h5>
            <h5>{props.user.expDate}</h5>

            
            <h2>Products Information</h2>

            {
            
                props.cart.map((item, i) =>(
                    <div className = 'cartproduct' key = {i}>

                    <h4>{item.name}</h4>
                    <h4>${item.price}</h4>
                    <img src = {`images/${item.image}`}/>
                    {arr.push(item.price)}
                    </div>
                ))
                
            }
               

                <h4>Total Amount:- ${totalValue} </h4>

                <button
                onClick = {palceOrder}
                 >Place Order</button>

        </div>
    )

}

export default Checkout