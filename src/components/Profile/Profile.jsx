import c from './Profile.module.css';

let Profile = () => {
    return (
        <div className={c.profile}>
            <div className={c.profile_banner_avatar}>
                <img className={c.profile_banner} src={require("./../../pictures/banner.jpg")}/>

                <div className={c.profile_avatar}>
                    <div className={c.profile_avatar_shadow}>
                        <img src={require("./../../pictures/avatar.jpg")}/>
                    </div>
                </div>
            </div>
            <div className={c.profile_name_description}>
                <div className={c.profile_name}>
                    <p><strong>Pidaras Eblanof</strong></p>
                </div>
                <div className={c.profile_description}>
                    <p>Я того все ебал</p>
                </div>
            </div>
            <div>
                My posts
            </div>
            <div>
                New post
            </div>
            <div>Post1</div>
            <div>Post2</div>

        </div>
    )
}
export default Profile;