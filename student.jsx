import React from 'react'
 
 
export default class Student extends React.Component{
 
   constructor(props){
       super(props)
       this.state = {
           students: [],
           name: ''
       }
   }
 
   fetchData(){
       var url = 'http://rmit.chickenkiller.com:8080/students'
       fetch(url)
           .then(res=>res.json())
           .then(json=>this.setState({students: json}))
   }
 
   componentWillMount(){
       this.fetchData()
   }
 
   handleChange(e){
       var obj = {}
       obj[e.target.name] = e.target.value
       this.setState(obj)
   }
 
   save(){
       var url = 'http://rmit.chickenkiller.com:8080/students'
       fetch(url, {
           method: 'post',
           headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
           },
           body: JSON.stringify({name: this.state.name})
       }).then(res=>res.json())
       .then(json=> this.fetchData())
   }
 
 
   render(){
       return(
       <div>
           <h1>Student Management</h1>
           <h2>Student List</h2>
           <div>
               {this.state.students.map(s=>
               <div>
                   <div>{s.id} {s.name}</div>
                   <img src={s.avatar}/>
               </div>
               )}
           </div>
 
           <h2>Add new student</h2>
           <input type="text" id="name" name="name" value={this.state.name}
               onChange={this.handleChange.bind(this)}
           />
           <button onClick={this.save.bind(this)}>Save</button>
 
       
       </div>
       )
   }
 
}