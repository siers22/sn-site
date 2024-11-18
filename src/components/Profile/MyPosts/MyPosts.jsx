import c from './MyPosts.module.css';
import Post from "./Post/Post";

let MyPosts = () => {
    return (<div className={c.post_wrapper}>

            <p className={c.profile_content_text}>My posts </p>
            <div className={c.profile_content}>
                <div className={c.profile_content_input}>

                    <textarea className={c.post_input}>Post content</textarea>

                </div>
                <div className={c.profile_postbutton}>
                    <button>Post Button</button>
                </div>
            </div>
            <h2 className={c.start_text}>Posts</h2>
            <div className={c.posts_ar}>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>


        </div>

    )
}
export default MyPosts;