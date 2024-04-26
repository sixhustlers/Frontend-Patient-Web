import '../css/FooterNav.css'

function FooterNav() {
    return (
        <div className='footerNav'>
            <div className='footerNav__item'>
                <img  className="footerNav__item-img-home" src='FooterNav/home.png' alt='home' />
                <h1 className='footerNav__item-text'>Home</h1>
            </div>
            <div className='footerNav__item'>
                <img  className="footerNav__item-img-records" src='FooterNav/records.png' alt='home' />
                <h1 className='footerNav__item-text'>Records</h1>
            </div>
            <div className='footerNav__item'>
                <img  className="footerNav__item-img-calender" src='FooterNav/calender.png' alt='home' />
                <h1 className='footerNav__item-text'>Appointment</h1>
            </div>
            <div className='footerNav__item'>
                <img  className="footerNav__item-img-profile" src='FooterNav/profile.png' alt='home' />
                <h1 className='footerNav__item-text'>Profile</h1>
            </div>
        </div>
    )
}   

export default FooterNav;