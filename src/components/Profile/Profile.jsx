import c from './Profile.module.css';

let Profile = () => {
    return (<div className={c.profile}>
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

            <p className={c.profile_content_text}>My posts </p>

            <div className={c.profile_content}>
                <div className={c.profile_content_input}>

                    <label htmlFor="post_input">Post input <br></br></label>
                    <input type="text" name="post_input"/>

                </div>
                <div className={c.profile_postbutton}>
                    <p align={"center"}>POST</p>
                </div>
                <div className={c.profile_content_posts}>
                    <p>Posts</p>
                </div>
            </div>

        </div>)
}
export default Profile;