import React from 'react';
import '../App.css';
import Post from './Post.jsx';
import dataJson from '../posts.json';

class Posts extends React.Component {
    constructor(props){
        super(props);

    this.state = {posts:dataJson.posts}
    }

    _removePost = (id) =>{
        var posts = this.state.posts.filter((element) => {return element.id != id})
        this.setState({posts});
    }

    _likePost = (id) =>{
        var posts = this.state.posts.map((element) => {

            if(element.id == id)
                element.like = !element.like;

            return element;
        })

        this.setState(posts);
    }

    render(){
        return (
            <div className="App">
                 {this.state.posts.map((post, key) => 
                    <Post key={key} id={post.id} like={post.like} _likePost={this._likePost} title={post.title} url={post.url} _removePost={this._removePost}/>
                 )}
            </div>
        )
    }

}

export default Posts