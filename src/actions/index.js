import jsonplaceholder from "../apis/jsonplaceholder";


export const fetchposts = () =>{
   return async (dispatch,getState) => {
       const response = await jsonplaceholder.get('/posts');
       dispatch({type:'FETCH_POSTS',payload:response})
   }  
};