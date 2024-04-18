import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import setPost from "../posts/operations";

const Post = () => {
    const post = useSelector(state => console.log(state.post.posts))

    const dispatch = useDispatch()
    
    useEffect (() => {
        dispatch(setPost())
    }, [])
    
    
    return (
        <div>
            {post?.map((p) => {
                return (
                    <div>
                        {/* <img src= {p.avatar} alt="" /> */}
                        <p>{p.first_name}</p>
                        <p>{p.last_name}</p>
                    </div>
                  
                )
            })}
        </div>
    )
}

export default Post