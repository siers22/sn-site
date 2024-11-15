import c from './Nav.module.css';

let Nav = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <a>Profile</a>
            </div>
            <div className={c.item}>
                <a>Messages</a>
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