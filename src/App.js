 import React, { useEffect } from 'react';
 import {  useDispatch, useSelector } from 'react-redux';
import Login from './component/Login/Login';
import { login, logout, selectuser } from './store/userslice';
import Homescreen from './component/homescreen/Homescreen';
import firebase from "firebase";

const App = ()=>{

  const user=useSelector(selectuser)
  const dispatch = useDispatch()
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        // User is signed in.
        dispatch(login ({
          uid:user.id,
          email:user.email
        }))
      }
      else{
          dispatch(logout)
      }
    })
  
  },[])
  
  return(
 
   <div>
      {
        !user ?   (<Login/>) :
        <Homescreen/>
      }
     
    </div>
 
 
  ) 
}

export default App;