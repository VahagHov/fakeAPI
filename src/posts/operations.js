
import axios from "axios";
import  {setPosts} from "../posts/postsSlice";

 export const setPost = () => {
  const apiURL = "https://reqres.in/api/users?page=2"
  return async (dispatch) => {
    await axios
                .get(apiURL).then((res) => {
                    console.log(res.data.data);
                    dispatch(setPosts(res.data.data))
            })
  } 
  
}

    
export default setPost