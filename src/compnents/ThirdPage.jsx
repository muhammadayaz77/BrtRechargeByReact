

import { Link } from 'react-router-dom'
import logo1 from '../../public/Images/logo.png'
import logo2 from '../../public/Images/logonum2.png'

let ThirdPage = () => {
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
                    <h2>Select mode of payment</h2>
                </div>
                <div className='img2'>
                    <img src={logo2} className='logo2' alt="" />
                </div>
                </div>
                <div className="btnCon1">
                <div className="btn1">
                <Link to='/forth-page' className='myBtn'>Cash</Link>
                <button className='myBtn'>Add Credit/Debit Card</button>
                </div>
                </div>
                <div className="btnCon1 mt-4">
                <div className="btn1">
                <Link to="/second-page" className='myBtn'>Jazz Cash</Link>
                <button className='myBtn'>Easy Paise</button>
                </div>
                </div>
                <div className="btnCon1 mt-4">
                <div className="btn1">
                <Link to="/second-page" className='myBtn redBtn'>Back</Link>
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ThirdPage