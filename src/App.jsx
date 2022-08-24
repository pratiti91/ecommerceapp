import axios from 'axios'
import React, { useEffect } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CategoryProducts from './components/CategoryProducts'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import ProfilePage from './components/ProfilePage'
import RegisterPage from './components/RegisterPage'
import { domain } from './env'

const App = () => {
  const userToken=window.localStorage.getItem("token")
  console.log(userToken, "this is user Token");
  useEffect(()=>{
    if(userToken !== null){
      const getdata = async()=>{
        await axios({
          method:"get",
          url:`${domain}/api/profile/`,
          headers:{
            Authorization:`token ${userToken}`
          }
        }).then(response=>{
          console.log(response.data, "$$$$$ user Profile Data");
        })
      }
      getdata()
      
    }

  })
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route exact path='/product/:id' element={<ProductDetails/>}></Route>
      <Route path='/product/:id/product/:id' element={<ProductDetails/>}></Route>
      <Route exact path='/category/:id' element={<CategoryProducts/>}></Route>
      <Route exact path='/login' element={<LoginPage/>}></Route>
      <Route exact path='/register' element={<RegisterPage/>}></Route>
      <Route exact path='/profile' element={<ProfilePage/>}></Route>
      

      

      <Route exact element={<HomePage/>}></Route>
      
      

     </Routes>
    </BrowserRouter>
  )
}

export default App
