import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './components/Admin/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import OrderList from './components/Admin/OrderList/OrderList';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Messages from './components/Admin/Messages/Messages';
import Book from './components/Admin/Book/Book';
import ManageService from './components/Admin/ManageService/ManageService';
import Review from './components/Admin/Review/Review';
import BookingList from './components/Admin/BookingList/BookingList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Login from './components/Login/Login/Login'
import { createContext, useState } from 'react';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/orderList">
              <OrderList/>
            </Route>
            <Route path="/addServices">
              <AddService/>
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin/>
            </Route>
            <Route path="/messages">
              <Messages/>
            </Route>
            <Route path="/book">
              <Book/>
            </Route>
            <Route path="/manageService">
              <ManageService/>
            </Route>
            <Route path="/review">
              <Review/>
            </Route>
            <Route path="/bookingList">
              <BookingList/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
