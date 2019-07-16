import React, { Component } from 'react'

export default class Postform extends Component {

    state = {
        title: '',
        body: '',
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json()).then(data => console.log(data))
    }

    render() {
        return (
            <div>
               <h1>Add Post</h1> 
               <form onSubmit={this.handleSubmit}>
                   <div> 
                       <label>Title:</label><br></br>
                       <input type='text' name='title' value={this.state.title} onChange={this.handleChange}></input>
                   </div>
                   <div> 
                       <label>Body:</label><br></br>
                       <textarea name='body' value={this.state.body} onChange={this.handleChange}></textarea>
                   </div>
                   <br></br>
                   <button type='submit' >Submit</button>
               </form>
            </div>
        )
    }
}
