const Useraddress = (props) =>{

    return(

        <div>
        <div className = 'useraddress'>
            {props.user.userAddress}
        </div>

        <div className = 'useraddress'>
            {props.user.userCity}
        </div>

        <div className = 'useraddress'>
            {props.user.userZipcode}
        </div>

</div>
    )

}

export default Useraddress