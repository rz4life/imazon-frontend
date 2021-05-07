const Userwallet = (props) =>{

    return(
        <div>
                <div className = 'userwallet'>
                    {props.user.cardName}
                </div>

                <div className = 'userwallet'>
                    {props.user.cardNumber}
                </div>

                <div className = 'userwallet'>
                    {props.user.expDate}
                </div>

        </div>
    )

}

export default Userwallet