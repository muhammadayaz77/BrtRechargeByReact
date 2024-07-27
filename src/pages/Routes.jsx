import {BrowserRouter} from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Frontend from '../compnents/Index'
let Index = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/*' element={<Frontend />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Index