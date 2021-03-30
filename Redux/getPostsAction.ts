import axios from "axios"

 const getPosts = () =>{
    return async dispatch=>{
        let res = await axios.get('https://simple-blog-api.crew.red/posts')

        dispatch({
            type:'GET_POSTS',
            payload:res.data
        })
    }
}
export default getPosts;