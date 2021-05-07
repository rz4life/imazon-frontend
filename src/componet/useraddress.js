import { useState} from 'react'

const Useraddress = (props) =>{

    const[page, setPage] = useState('firstpage')
    const [useraddress, setUserAddress] = useState('')
    const [userCity, setUserCity] = useState('')
    const [userZipcode, setUserZipcode] = useState('')

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

                <form>

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