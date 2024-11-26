import logo from './pictures/logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <Nav> </Nav>
            <Dialogs></Dialogs>
            {/*<Profile name="cheel" prof_descr="cheeeeel" ></Profile>*/}
        </div>
    )
}
export default App;
