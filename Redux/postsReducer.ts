let initialState = {
   posts:[],
   latestPosts:[]
}
  
   function postsReducer (state = initialState, action) {

           switch (action.type) {
                  case 'GET_POSTS':
                    return {
                     ...state,
                     posts: action.payload
                  }
                  case 'GET_LATESTS_POSTS':
                    return {
                     ...state,
                     latestPosts: action.payload
                  }
                  
                  case 'CREATE_NEW_POST': {
                       
                     return{
                        ...state,
                     }
                  }
                  case 'DELETE_POST': {
                     return {
                        ...state
                     }
               }
               case 'UPDATE_POST': {
                  return{
                     ...state,
                  }
            }
                  default:
                     return state
              }


}


export default postsReducer;






  


