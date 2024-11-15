import c from "./Header.module.css";
let Header = () => {
    return (
        <header className={c.header}>
            <div className={c.site_logo}>
                <img src={require('./../../pictures/app-logo.png')} alt="logo"/>
            </div>
        </header>
    )
}
export default Header;