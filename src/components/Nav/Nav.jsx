import c from './Nav.module.css';

let Nav = () => {
    return (
        <nav className={c.nav}>

            <div className={`${c.item} ${c.active}`}>
                <a href="/profile">Profile</a>
            </div>

            <div className={c.item}>
                <a href="/dialogs">dialogs</a>
            </div>

            <div className={c.item}>
                <a>Friends</a>
            </div>

            <div className={`${c.item} ${c.settings}`}>
                <a>Settings</a>
            </div>

        </nav>
    )
}
export default Nav;