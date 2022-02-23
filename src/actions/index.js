export const CREATE_TODO_ITEM = "CREATE_TO_DO_ITEM"
export const UPDATE_TODO_ITEM = "UPDATE_TODO_ITEM"
export const DELETE_TODO_ITEM = "DELETE_TODO_ITEM"

export const createTODO =(item)=> (dispatch)=>{
    dispatch({type:CREATE_TODO_ITEM, payload:item})
}

export const updateTODO =(item)=>(dispatch)=>{
    dispatch({type:UPDATE_TODO_ITEM, payload:item})
}

export const deleteTODO =(id)=>(dispatch)=>{
    dispatch({type:DELETE_TODO_ITEM, payload:id})
}

export default actions;