// import React from 'react'

// export default class Hello extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'Trump',
//             age: 60,
//             realestates: ['villa in Vt', "Villa in NT", "Villa in Sg", "Villa in your land"],
//             houseName: "Trump hotel In Saigon"
//         }
//     }
//     save(){
//         var houseName= this.state.houseName
//         this.setState({realestates: this.state.realestates.concat(houseName)})
//     }
//     changeAge(){
//         this.setState({age: this.state.age +1})
//     }
//     render() {
//         return (
//             <div>
//                 {/* <h1> */}
//                 <h1>    Hello {this.state.name} </h1>

//                 <div>    Your age is {this.state.age}</div>
                
//                 <button onClick={this.changeAge.bind(this)}>Increase age</button>
//                 {this.state.realestates.map(r=>
//                 <li>{r}</li>
//                 )}

//                 <h1> Adding new house</h1>
//                 <span>Name:</span>
//                 <input type="text" name="houseName" id="houseName" value={this.state.houseName}/>
//                 <button onClick={this.save.bind(this)}>Save</button>
//             </div>

//         )
//     }
// }
