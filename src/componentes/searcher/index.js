import React, { Component } from "react"
import { Redirect } from "react-router-dom"

import "./index.css"

/* eslint-disable */


export default class Searcher extends Component {
    constructor(props){
      super(props)
      this.state = {
        title : "",
        submited: false,
      }

      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(){
      event.preventDefault();
      this.setState({
        submited: true
      })
    }

    redirectPage(){
      if(this.state.submited){
        return <Redirect to={`/result/${this.state.title}`} /> 
      }
    }

    
    handleChange(event){
      this.setState({title: event.target.value})
    }


    componentDidUpdate(){
      return this.state.submited ? this.setState({ submited: false}): ""
    }

    render(){
        return(
          <form className="formEl" onSubmit={this.handleSubmit}>
            <input type="text" id="inputEl" value={this.state.title} onChange={this.handleChange} placeholder="Search a location..." className="inputEl"></input>
            <button type="submit" id="btnEl" className="inputEl">
              <i className="fas fa-search">
              </i>
            </button>
            {this.redirectPage()}
          </form>
        )
    }
}
