import Axios  from 'axios'

 const FetchRequest=(payload)=>{
   return{
  type:'fetch_Request',
  payload
   }
}
 const FetchSuccess=(payload)=>{
    return{
        type:'fetch_Success',
        payload
    }
}
 const FetchFailure=(payload)=>{
    return{
        type:'fetch_Failure',
        payload
    }
}

export const fetchData=(payload)=>(dispatch)=>{
    dispatch(FetchRequest())
    console.log(payload,"fetchdata")
    Axios.get("https://my-json-server-masai.herokuapp.com/items")
    .then((res)=>{
        console.log('res from fetch', res.data);
        dispatch(FetchSuccess(res.data))
    })
    .catch((e)=>{
        return dispatch(FetchFailure(e.data))
    })
}

const FetchSingleRequest=(payload)=>{
    return{
   type:'fetch_Single_Request',
   payload
    }
 }
  const FetchSingleSuccess=(payload)=>{
     return{
         type:'fetch_Single_Success',
         payload
     }
 }
  const FetchSingleFailure=(payload)=>{
     return{
         type:'fetch_Single_Failure',
         payload
     }
 }

 export const billgen = (payload)=>{
    return{
        type:"bill_gen",
        payload
    }
 }
 
 
 export const fetchSingleData=(id,q)=> (dispatch)=>{
     dispatch(FetchSingleRequest())
     Axios.get(`https://my-json-server-masai.herokuapp.com/items/${id}`)
     .then((res)=>{
        console.log('res from fetch', res.data);
        return dispatch(FetchSingleSuccess({payload:res.data,q:q}))     
     })
     .catch((e)=>{
         return dispatch(FetchSingleFailure(e.data))
     })
 }


 export const postdata = (payload)=>(dispatch)=>{
    console.log("payload",payload);
    Axios.post("https://my-json-server-masai.herokuapp.com/items/",payload)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err.message);
    })
 }