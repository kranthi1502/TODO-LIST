import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css'

let id=0;
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      list:[],
    };
    }
    
   handleChange=({target:{name,value}})=>{
         if(value!=null){
           this.setState({[name]:value});
         }
       // console.log(this.state)
        
        //console.log(this.state.list);
   }
   handleSubmit=()=>{
    let list=[...this.state.list]
     list.push(this.state.todo)
     this.setState({list});
   //  console.log(this.state.list);
   }
delete =(id)=>{
  let list=[...this.state.list]
  console.log(list);
  list.splice(id,1)
  console.log({list});
  this.setState({list});
}

  

render(){
  return(
    <div>
    <div>
    <h1 style={{color:'blue',text_align:'center'}}>TODO_LIST</h1>
    </div>
    <div>
    <form className='first'>
    <input 
    type="textarea" 
    name='todo' 
    onChange={this.handleChange}>
    </input>
    <button type='button'
     name='add' 
     onClick={this.handleSubmit}>
     ADD
     </button>
   
    </form></div>
    <div>
    </div>
    <div>
          <table className="table mx-4 table-bordered">
            <thead>
              <th>Item</th>
              <th>Action</th>
            </thead>
            <tbody>
              {this.state.list.map((item,id)=>(
                <tr key={id}>
                  <td>{item}</td>
                  <td><button className="btn btn-danger" type="button" onClick={()=>this.delete(id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      {this.state.list.map((item,id)=>{
        <ul>
        <li>key={id}</li>
        <li>{item}</li>
        </ul>
      })}
    </div>
  )}
}
