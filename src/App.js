import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {


  render() {
            const list = [
            {
            title: 'React',
            url: 'https://facebook.github.io/react/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
            },
            {
            title: 'Redux',
            url: 'https://github.com/reactjs/redux',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
            },
            ];
    return (
       <div className="App">
         {list.map(function(x){
           return (
             <div>
             <span><a href={x.url}>{x.title}</a></span>
             <span>{x.author}</span>
             <span>{x.num_comments}</span>
             </div>
           )
         })}
       </div>
        
    );
  }
}

export default App;
