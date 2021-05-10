import axios from 'axios'
import { useState} from 'react'

const Userwallet = (props) =>{

    const[page, setPage] = useState('firstpage')
    const [cardname, setCardname] = useState(props.user.cardName)
    const [cardnumber, setCardnumber] = useState(props.user.cardNumber)
    const [expDate, setExpDate] = useState(props.user.expDate)

    const submitform = (e) =>{
        e.preventDefault()
        const userId = localStorage.getItem('userId')

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/${userId}`,{
            cardName: cardname,
            cardNumber: cardnumber,
            expDate: expDate
        })
        .then((response) =>{
            console.log(response)
        })
    }

    return(
        <div>
            {
                page === 'firstpage' ?
                <>
                <div className = 'userwallet'>
                    {props.user.cardName}
                </div>

                <div className = 'userwallet'>
                    {props.user.cardNumber}
                </div>

                <div className = 'userwallet'>
                    {props.user.expDate}
                </div>
                <button onClick = {() =>(
                    setPage('secondpage')
                )}
                >Edit Wallet</button>
                </>
                :
                null
            }

            {

                page === 'secondpage' ?

                <form onSubmit = {submitform}>

                    <div className = 'input'>      
                        <input placeholder = 'card Name'  value = {cardname} onChange = {(e) =>(setCardname(e.target.value))}/>
                    </div>

                    <div className = 'input'>      
                        <input placeholder = 'card Number'  value = {cardnumber} onChange = {(e) =>(setCardnumber(e.target.value))}/>
                    </div>

                    <div className = 'input'>      
                        <input placeholder = 'Exp date'  value = {expDate} onChange = {(e) =>(setExpDate(e.target.value))}/>
                    </div>


                    <div className = 'input'>
                        <input type = 'submit' value = 'Edit wallet'/>
                    </div>
                    
                </form>
                :
                null
            }
            

        </div>
    )

}

export default Userwallet