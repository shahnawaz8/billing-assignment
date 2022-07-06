const initialState={
    laoding:false,
    Error:false,
    
    products:[],
    currentProduct:{},
}

export const productReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case 'fetch_Request':
        return{
              ...state,
              laoding:true,
              Error:false
        }
        case 'fetch_Success':
            return{
                ...state,
                laoding:false,
                products:payload,
                Error:false
            }
        case 'fetch_Failure':
            return{
                ...state,
                laoding:false,
                Error:true
            }        
            case 'fetch_Single_Request':
                        return{
                            ...state,
                            laoding:true,
                            Error:false
                        } 
                      case 'fetch_Single_Success':
                        return{
                            ...state,
                            laoding:false,
                            currentProduct:payload,
                            Error:false
                        }
                      case 'fetch_Single_Failure':
                        return{
                            ...state,
                            laoding:false,
                            Error:true
                    
                        }      
            default:
                return state;
        }
    }
