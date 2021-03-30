import axios from "axios"

 const getLatestsPosts = () =>{
    return async dispatch=>{
        let res = await axios.get('https://simple-blog-api.crew.red/posts')
        let lastPosts = res.data.slice(-6)
 
        dispatch({
            type:'GET_LATESTS_POSTS',
            payload:lastPosts
        })
    }
}
export default getLatestsPosts;