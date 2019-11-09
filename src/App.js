import React from 'react'
import Header from './memeGenerator/Header'
import MemeGenerator from './memeGenerator/MemeGenerator';

function App(){
    return(
        <div>
            <Header/>
            <MemeGenerator/>
        </div>
    )
}
export default App
// class App extends React.Component {                              // form creation
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             age: 0,
//             gender: "",
//             place: "Dubai",
//             resIndex: [false, false, false],
//             resItems: ["Gluten", "Lactose", "Fibre"]
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     handleChange(event) {
//         const { name, value, type, checked } = event.target
//         type === "checkbox" ? this.setState((prevState) => {
//             prevState.resIndex[parseInt(name)] = !prevState.resIndex[parseInt(name)]
//             return {
//                 resIndex: prevState.resIndex
//             }
//         }
//         )
//             :
//             this.setState({
//                 [name]: value
//             })
//     }
    
//     handleSubmit(){
//         alert("Form submitted")
//     }

//     render() {
        
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} placeholder="First Name"></input>
//                     <br />
//                     <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} placeholder="Last Name"></input>
//                     <br />
//                     <input type="number" placeholder="Age" value={this.state.age} name="age" onChange={this.handleChange}></input>
//                     <br />
//                     <input type="radio" name="gender" value="Male" onChange={this.handleChange}></input>Male
//                     <br />
//                     <input type="radio" name="gender" value="Female" onChange={this.handleChange}></input>Female
//                     <br />
//                     <input type="radio" name="gender" value="Unpreferred" onChange={this.handleChange}></input>Prefer not to mention
//                     <br />
//                     <h4>Select place you wish to travel :</h4>
//                     <select name="place" onChange={this.handleChange}>
//                         <option value="Dubai">Dubai</option>
//                         <option value="Singapore">Singapore</option>
//                         <option value="Maldives">Maldives</option>
//                     </select>
//                     <br />
//                     <h4>Dietary Restrictions:</h4>
//                     <input type="checkbox" name="0" checked={this.state.resIndex[0]} onChange={this.handleChange}></input>Fibre
//                     <input type="checkbox" name="1" checked={this.state.resIndex[1]} onChange={this.handleChange}></input>Gluten
//                     <input type="checkbox" name="2" checked={this.state.resIndex[2]} onChange={this.handleChange}></input>Lactose
//                     <br/>
//                     <button>Submit</button>
//                 </form>
//                 <hr />
//                 <h1>Entered Information:</h1>
//                 <h2>First Name : {this.state.firstName}</h2>
//                 <h2>Last Name  : {this.state.lastName} </h2>
//                 <h2>Age: {this.state.age}</h2>
//                 <h2>Gender: {this.state.gender}</h2>
//                 <h2>Destination: {this.state.place}</h2>
//                 <h2>Restrictions: {this.state.restrictions}</h2>
//             </div>
//         )
//     }
// }

// class App extends React.Component{           // obtaining data from API and rendering parts of API
//     constructor(){
//         super()
//         this.state={
//             loading: false,
//             character:{}
//         }
//     }
//     componentDidMount() {
//         this.setState({
//             loading:true
//         })
//         fetch("https://swapi.co/api/people/1").then(response=> response.json()).then(data=>{this.setState({
//             loading: false,
//             character: data
//         })})    
//     }

//     render() {
//         console.log("rendered "+this.state.loading);
//         const text= this.state.loading?"Loading...":this.state.character.height

//         return (
//             <div>
//                 {text}
//             </div>
//         )
//     }
// }
// class App extends React.Component{           // conditional-rendering practice

//     constructor(){
//         super()
//         this.state={
//             user: false
//         }
//         this.handleClick= this.handleClick.bind(this)
//     }

//     handleClick(){
//         this.setState(prevState=>{
//             return {
//                 user: !prevState.user
//             }
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.handleClick}>{this.state.user?"LogOut":"LogIn"}</button>
//                 <p>{this.state.user?"Logged In":"Logged Out"}</p>
//             </div>
//         )
//     }

// }

// class App extends React.Component {              // conditional rendering
//     constructor() {
//         super()
//         this.state = {
//             isLoading: true
//         }
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 isLoading: false
//             })

//         }, 2500)
//     };
//     render() {

//         return (
//             <div>
//                 {this.state.isLoading === true ? <h1>Loading...</h1> : <Conditional />}
//             </div>
//         )
//     }
// }
// class App extends React.Component{                       // todo-list app
//     constructor(){
//         super()
//         this.state={
//             todos: todosList
//         }
//         this.handleChange=this.handleChange.bind(this)
//     }
//     handleChange(id){
//         this.setState(
//             (prevState)=>{
//                 const newToDos=prevState.todos.map(item=>{
//                     if(item.id===id){
//                         item.completed=!item.completed
//                     }
//                     return item
//                 })
//                 return{
//                     todos: newToDos
//                 }
//             }
//         )
//     }

//     render(){
//         const todoArray= this.state.todos.map(item=>{
//             return(
//                 <ToDoItem Item={item} key={item.id} HandleChange={this.handleChange}/>
//             )
//         })
//         return(
//             <div className="todo-list">
//                 {todoArray}
//             </div>
//         )
//     }
// }

