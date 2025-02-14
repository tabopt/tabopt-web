import { Route, Routes } from 'react-router-dom'
import Home from '../pages/main/Home'
import Results from '../pages/results/Results'
import SignIn from '../pages/auth/signin/SignIn'

const Router = () => {
  return (
    <> 
      <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path="/results" element={<Results/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
      </Routes>
    </>
  )
}

export default Router