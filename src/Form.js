import {UseState} from "react"
import {createTODO} from './actions/index'
import {connect, Connect} from 'react-redux'


const Forms = (props)=>{
    const TODO, setTODO = UseState('');

}
setTODO

handleSubmit =(e)=>{
    e.preventDefault();
    const newTODOS ={
        id: 0,
        task:'toDos',
        completed:false,
    };
    }

return(
    < form onSubmit= {handleSubmit}>
    <label htmlFor="TODO">To DO</label> 
    <input> 
        type = 'text'
        name = 'TODO'
        value = {'TODO'}
        onChange {(e) => setTODO [e.target.value]}
        <input/>


    <input type='submit'/>
</form>

)

props.createTODO(newTODO);


export default connect(null,{createTODO})(Forms);