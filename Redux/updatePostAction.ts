import axios from "axios"

 const updatePostAction = (title, body, id) =>{
    return async dispatch=>{
        axios.put('https://simple-blog-api.crew.red/posts/'+id,{
            'title': title,
            'body' : body
      })

        dispatch({
            type:'UPDATE_POST',
        })
    }
}
export default updatePostAction;
