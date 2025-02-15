import { Route, Routes } from 'react-router-dom'
import Home from '../pages/main/Home'
import Results from '../pages/results/Results'
import SignIn from '../pages/auth/signin/SignIn'

const Router = () => {
  return (
    <> 
      <Routes>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/results/*' element={<Results/>}/>
      </Routes>
    </>
  )
}

export default Router