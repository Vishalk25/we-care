import './Navbar.css'

export const Navbar = ()=> {
    return (
        <>
        <div id='navbar-main'>
            <div id="brandLogo">
            <img alt="Brand logo" src="../src/assets/we-care-logo-transparent.png" width={'180px'} height={'60px'} />
            </div>
            <div id='nav-options'>
                <div id='nav-field-wrapper'>
                <div className='nav-fields'>Fundraisers</div>
                <div className='nav-fields'>Events</div>
                <button className='nav-fields' id='login-btn' onClick={()=>console.log("clicked")} >Login</button>
                <button className='nav-fields' id='signup-btn' onClick={()=>console.log("clicked")} >Signup</button>
                </div>
            </div>
        </div>
        </>
    )
}