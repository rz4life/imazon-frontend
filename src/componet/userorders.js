import axios from "axios"
import { useEffect, useState } from 'react';

const UserOrders = () =>{


    const [allorders, setAllOrders] = useState([])

    const getallOrders = () =>{
        const userId = localStorage.getItem('userId') 
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/orders`, {
            headers: {Authorization: userId}
        }).then((response) =>{
            console.log(response.data.orders)
            if(response.data.orders){
                setAllOrders(response.data.orders)
            }
        })

    }
    useEffect(getallOrders, [])

    return(


        <div>

            {
                allorders.map((items, i) =>(

                    <div className = 'allorders' key = {i}>

                        <h3>Name:- {items.cardName}</h3>
                        <h3>Total:- ${items.total}</h3>
                        <h4>Products</h4>
                        {
                          items.products.map((products,i) =>(
                              <div>
                                 <h6>. {products.name}</h6>
                             </div> 
                          ))  
                        }
                    </div>
                ))
            }
           
        </div>

    )

}

export default UserOrders