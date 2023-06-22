import React, { Component } from 'react';

import './index.css'

class FetchItem extends Component{
    state={
        posts:[],
        error:null,
    }
    componentDidMount(){

     //fetch("https://jsonplaceholder.typicode.com/posts"): This initiatesa network request to the specified URL, which returns a promise.

      // .then((response) => response.json()): This .then method is called on the promise returned by fetch. It takes the response from the network request and converts it to JSON format.

      // .then((data) => this.setState({ posts: data })): This .then method is called on the promise returned by the previous .then block. It takes the JSON data and updates the component's state by calling setState with the posts property set to the fetched data.

      // .catch((error) => this.setState({ error: error.message })): This .catch method is called if there is an error during the network request or JSON parsing. It updates the component's state by setting the error property with the error message.

      // By placing this code within the componentDidMount lifecycle method of a class component, you ensure that the API call is made once the component is mounted in the DOM. The fetched data is then stored in the component's state, triggering a re-render and allowing you to display the data in the UI.





    
    
        
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>(response.json()))
        .then((data)=>this.setState({posts:data}))
        
         
        .catch((error) => this.setState({ error: error.message }));
        
        
}

    render(){
        const {posts,error}=this.state
        return (
            <div>
        <h1>Posts</h1>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}
export default FetchItem;