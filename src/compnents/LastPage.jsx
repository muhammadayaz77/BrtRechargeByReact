import {Link} from 'react-router-dom'

import logo1 from '../../public/Images/logo.png'
import logo2 from '../../public/Images/logonum2.png'
import img3 from '../../public/Images/Peshawar-BRT-B-12-08-1024x640.jpg'
import { useSelector } from 'react-redux'
let LastPage = () => {
    let recharge = useSelector(store => store.brt)
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
              
              
                    <h2 className='text-center'>Congratulations <br />Your Card has been successfully Recharged</h2>
               
              <div className="textCenter">
                
              <h2 className='text-center newBal'>New Balanced is : {recharge}</h2>
               
              </div>
               
                <div className="btnCon1 mt-4">
                <div className="btn1">
                <Link to='/forth-page' className='myBtn redBtn'>Back</Link>
                <Link to='/' className='myBtn'>Next</Link> 
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LastPage