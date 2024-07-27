import { Routes,Route } from "react-router-dom"
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import ForthPage from './ForthPage'
import LastPage from './LastPage'

let Index = () => {
    return(
        <>
        <Routes>
        <Route path='*' element={<FirstPage/>} />
            <Route path='/second-page' element={<SecondPage/>} />
            <Route path='/third-page' element={<ThirdPage/>} />
            <Route path='/forth-page' element={<ForthPage/>} />
            <Route path='/last-page' element={<LastPage/>} />
        </Routes>
        </>
    )
}

export default Index