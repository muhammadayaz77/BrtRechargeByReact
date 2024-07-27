import {Link} from 'react-router-dom'

import logo1 from '../../public/Images/logo.png'
import logo2 from '../../public/Images/logonum2.png'
import img3 from '../../public/Images/Peshawar-BRT-B-12-08-1024x640.jpg'
let SecondPage = () => {
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
                    <h2>Place your Zu Card on the reader</h2>
                </div>
                <div className='img2'>
                    <img src={logo2} className='logo2' alt="" />
                </div>
                </div>
                <div className="btnCon1">
                <div className="imgCon3">
                    <img src={img3} className='img3'alt="" />
                </div>
                </div>
                <div className="btnCon1 mt-4">
                <div className="btn1">
                <Link to='/' className='myBtn redBtn'>Back</Link>
                <Link to='/third-page' className='myBtn'>Next</Link> 
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SecondPage