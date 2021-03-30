import axios from "axios";

const deletePostAction = (id) =>{
    return async dispatch=>{
       axios.delete('https://simple-blog-api.crew.red/posts/'+id,{
      })
        dispatch({
            type:'DELETE_POST',
            
        })
    }
}
export default deletePostAction;

