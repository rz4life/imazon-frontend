import axios from 'axios'
import React, { useEffect } from 'react'



const UserOrders = () => {

    return(

    <div>
        <h1>Orders</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ORDER ID</th>
                        <th>USER</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.user.name}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>{order.totalPrice.toFixed(2)}</td>
                        
                            
                        </tr>
                    ))}
                </tbody>
            </table>        
    </div>
    )

}

export default UserOrders