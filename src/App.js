import logo from './pictures/logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Router} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>

                <div className="app_wrapper">
                    <Header></Header>
                    <Nav> </Nav>
                    <div className="app_wrapper_content">

                        <Router component={Dialogs}></Router>
                        <Router component={Profile}/>


                    </div>
                </div>
          
        </BrowserRouter>
    )
}
export default App;
