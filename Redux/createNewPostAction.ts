import axios from "axios"

 const createNewPostAction = (title, body) =>{
    return async dispatch=>{
       let x = await axios.post('https://simple-blog-api.crew.red/posts',{
            'title': title,
            'body' : body
      })
      
        dispatch({
            type:'CREATE_NEW_POST',
        })
    }
}
export default createNewPostAction;



