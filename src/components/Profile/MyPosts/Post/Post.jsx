import c from './Post.module.css';

let Post = (props) => {
    return (
        <div className={c.post_render}>
            <div className={c.post_avatar}>
                <div className={c.post_avatar_shadow}>
                    <img src='https://dubaitickets.tours/wp-content/uploads/2023/03/img-worlds-of-adventure-dubai-ticket-6-1.jpg'/>
                </div>
            </div>
            <div className={c.post_text}>
                <p>{props.message}</p>
                <span>like   ({props.likes}) </span>
            </div>
            <br></br>
        </div>


    )
}
export default Post;