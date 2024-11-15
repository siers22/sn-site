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
            <Profile></Profile>
        </div>
    )
}
export default App;
