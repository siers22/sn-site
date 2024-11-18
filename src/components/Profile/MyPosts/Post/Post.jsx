import c from './Post.module.css';

let Post = () => {
    return (
        <div className={c.post_render}>
            <div className={c.post_avatar}>
                <img
                    src='https://dubaitickets.tours/wp-content/uploads/2023/03/img-worlds-of-adventure-dubai-ticket-6-1.jpg'/>
            </div>
            <div className={c.post_text}>
                <p>Post</p>
                <span>like</span>
            </div>
            <br></br>
        </div>


    )
}
export default Post;