
import './App.css';
import { connect } from 'react-redux'
import { createTODO } from './actions';

const mapStateToProps= (state)=>{
  TODO: state.TODO
}

function App(props) {
  const{TODO}= props
// console.log(TODO)


  return (
    <div className="App">

      <header>
        <h1>To Do List</h1>
      </header>
      
      
      
    </div>
  );
}



export default connect( mapStateToProps,{}(App));