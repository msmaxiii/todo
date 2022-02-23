import {ADD_TODO,UPDATE_TODO,DELETE_TODO, updateTODO} from '../actions'

const initialState ={
    TODO:[],
    ID: 0,
    Task:'Learn Redux',
    Completed: false
}
function reducer(state=initialState,action){
    switch(action.type){
        case ADD_TODO:
        return{
            ...state,TODO:[...state.TODO,action.payload]
        }
        case UPDATE_TODO:
        return{
            ...state,TODO:[...action.payload.id]
        } 
        case DELETE_TODO:
         return{
             ...state,TODO:[...action.payload.id]
         }  
         default:return state   
    }
}

export default reducer;