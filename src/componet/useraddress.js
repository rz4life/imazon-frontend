import { useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

const Useraddress = (props) =>{

    const[page, setPage] = useState('firstpage')
    const [useraddress, setUserAddress] = useState(props.user.userAddress)
    const [userCity, setUserCity] = useState(props.user.userCity)
    const [userZipcode, setUserZipcode] = useState(props.user.userZipcode)

    const submitform = (e) =>{
        e.preventDefault()
        const userId = localStorage.getItem('userId')

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/${userId}`,{
            userAddress: useraddress,
           userCity: userCity,
            userZipcode: userZipcode
        })
        .then((response) =>{
            console.log(response)
        })
        return <Redirect to = '/profile'/>
    }

    return(

        <div>
            

            {
                page === 'firstpage' ?
                <>
                <div className = 'useraddress'>
                    {props.user.userAddress}
                </div>

                <div className = 'useraddress'>
                    {props.user.userCity}
                </div>

                <div className = 'useraddress'>
                    {props.user.userZipcode}
                </div>
                <button onClick = {() =>(
                    setPage('secondpage')
                )}
                >Edit Address</button>
                </>
                :
                null
            }

            {

                page === 'secondpage' ?

                <form onSubmit = {submitform}>

                <div className = 'input'>      
                    <input placeholder = 'Address'  value = {useraddress} onChange = {(e) =>(setUserAddress(e.target.value))}/>
                </div>

                <div className = 'input'>      
                    <input placeholder = 'City'  value = {userCity} onChange = {(e) =>(setUserCity(e.target.value))}/>
                </div>

                <div className = 'input'>      
                    <input placeholder = 'Zip Code'  value = {userZipcode} onChange = {(e) =>(setUserZipcode(e.target.value))}/>
                </div>      


                    <div className = 'input'>
                        <input type = 'submit' value = 'Edit Address'/>
                    </div>
                    
                </form>
                :
                null
            }

        </div>
    )

}

export default Useraddress