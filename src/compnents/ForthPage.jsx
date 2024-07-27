

import { Link } from 'react-router-dom'
import logo1 from '../../public/Images/logo.png'
import logo2 from '../../public/Images/logonum2.png'
import { useDispatch } from 'react-redux'
import { brtActions } from '../store'

let ForthPage = () => {
    let dispatch = useDispatch()
    let handleAddRecharge = (recharge) => {
        dispatch(brtActions.addRecharge(recharge))
    }
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
                    <h2>Select the amount for Recharge</h2>
                </div>
                <div className='img2'>
                    <img src={logo2} className='logo2' alt="" />
                </div>
                </div>
                <div className="btnCon1">
                <div className="btn1">
                <Link
                to='/last-page' 
                onClick={() => handleAddRecharge('50')}
                className='myBtn'>Rs.50</Link>
                <Link
                to='/last-page'
                onClick={() => handleAddRecharge('100')}
                className='myBtn'>Rs.100</Link>
                </div>
                </div>
                <div className="btnCon1 mt-4">
                <div className="btn1">
                <Link
                to="/last-page" 
                onClick={() => handleAddRecharge('500')}
                className='myBtn'>Rs.500</Link>
                <Link
                to="/last-page"
                onClick={() => handleAddRecharge('1000')}
                className='myBtn'>Rs.1000</Link>
                </div>
                </div>
                <div className="btnCon1 mt-4">
                <div className="btn1">
                <Link to="/third-page" className='myBtn redBtn'>Back</Link>
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ForthPage