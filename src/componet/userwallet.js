import { useState} from 'react'

const Userwallet = (props) =>{

    const[page, setPage] = useState('firstpage')
    const [cardname, setCardname] = useState('')
    const [cardnumber, setCardnumber] = useState('')
    const [expDate, setExpDate] = useState('')

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

                <form>

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