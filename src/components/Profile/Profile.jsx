import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

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
                <MyPosts></MyPosts>
            </div>



        </div>)
}
export default Profile;