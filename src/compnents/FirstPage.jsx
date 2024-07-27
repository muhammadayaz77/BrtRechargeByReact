import { Link } from 'react-router-dom'
import logo1 from '../../public/Images/logo.png'
import logo2 from '../../public/Images/logonum2.png'

let FirstPage = () => {
    return (
        <div className="FirstPage">
        <div className="container text-white">
            <div className="row justify-content-center pt-5">
                <div className="col-md-7 inner-box  pb-5">
                <div className="imgCon">
                <div className="img1">
                    <img src={logo1} alt="" className='logo1' />
                </div>
                <div className='text-area'>
                    <h2>Choose your Desired Option!</h2>
                </div>
                <div className='img2'>
                    <img src={logo2} className='logo2' alt="" />
                </div>
                </div>
                <div className="btnCon1">
                <div className="btn1">
                <button className='myBtn'>By ZuCard</button>
                <button className='myBtn'>By Single <br /> Journey Ticket</button>
                </div>
                </div>
                <div className="btnCon1 mt-4">
                <div className="btn1">
                <Link to="/second-page" className='myBtn'>Recharge</Link>
                <button className='myBtn'>Bicyle <br /> Membership</button>
                <button className='myBtn'>Zu Card Inquiry</button> 
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FirstPage