const initialState={
    laoding:false,
    Error:false,
    items:[],
    singleItem:{},
    newBill:[],
    q:'',
    s:false,
    bill_gen:{},
    b:false
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
                items:payload,
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
                      console.log('req in reducer',payload);  
                      return{
                            ...state,
                            laoding:false,
                            newBill:{...state,...payload},
                            singleItem:payload.payload,
                            q:payload.q,
                            s:true,
                            Error:false
                        }
                      case 'fetch_Single_Failure':
                        return{
                            ...state,
                            laoding:false,
                            Error:true
                    
                        } 
                        case "bill_gen":
                            return{
                                ...state,
                                bill_gen:{...state,...payload}
                            }     
            default:
                return state;
        }
    }
