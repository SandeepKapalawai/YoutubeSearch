import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class SearchBar extends React.Component{
 constructor(props){
     super(props)
     //this.onFormSubmit = this.onFormSubmit.bind(this);
 
 }

 state = {
     text:""
 }

 onInputChange = event =>{
    //  console.log(event.target.value)
    this.setState({text: event.target.value});
 }

 onFormSubmit=(event)=>{
    event.preventDefault()
    this.props.onFormSubmit(this.state.text)
 }

 render(){
     return(
     <div className="ui segment">
         <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
          <label>Video Search :</label>
          <input type="text" onChange={(event)=> this.setState({text : event.target.value})} />
          </div>
         </form>
     </div>
     )}
}


export default SearchBar;