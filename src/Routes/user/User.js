import React from 'react'
import "./User.css"
import Admin from "../admin/Admin"
import { Route, Switch, Redirect } from "react-router-dom"
import Login from '../Login/Login'
// import {useStateValue} from "../../context/stateprovider/StateProvider"
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "../../server/firebase"

function User() {
    // const [{user}, dispatch] = useStateValue()
    const [user] = useAuthState(auth)



  return user ? (
      <Switch>
        <Route path="/user/admin" component={Admin}/>
        <Redirect to="/user/admin"></Redirect>
      </Switch>
  ) : (
    <Switch>
        <Route path="/user/login" component={Login}/>
        <Redirect to="/user/login"></Redirect>
    </Switch>
  )
}

export default User