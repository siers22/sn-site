import logo from './pictures/logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <Nav> </Nav>
            <Profile name="Ebaan Ebanyyy" prof_descr="prekolni" ></Profile>
        </div>
    )
}
export default App;
