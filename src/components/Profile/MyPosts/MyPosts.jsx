import c from './MyPosts.module.css';

let MyPosts = () => {
    return (<div className={c.post_wrapper}>

            <p className={c.profile_content_text}>My posts </p>
            <div className={c.profile_content}>
                <div className={c.profile_content_input}>

                    <textarea>Post content</textarea>

                </div>
                <div className={c.profile_postbutton}>
                    <button>Post Button</button>
                </div>
                <div className={c.profile_content_posts}>
                    <p>Posts</p>

                    <div className={c.content_post}>Post 1</div>
                </div>
            </div>
        </div>

    )
}
export default MyPosts;