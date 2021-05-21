import React from 'react'
import { Switch, Route } from "react-router-dom"
import AddUser from '../pages/AddUser'
import LoginPage from '../pages/LoginPage'
import RegisteredCustomers from '../pages/ResgisteredCustomers'
import EditUser from '../pages/EditUser'
const Router = ({setRightButtonText}) =>{
    return <Switch>
        <Route exact path="/login">
            <LoginPage setRightButtonText={setRightButtonText}/>
        </Route>
        <Route exact path="/">
            <RegisteredCustomers/>
        </Route>
        <Route exact path="/add">
            <AddUser/>
        </Route>
        <Route exact path="/users/:id">
            <EditUser/>
        </Route>
    </Switch>
}
export default Router