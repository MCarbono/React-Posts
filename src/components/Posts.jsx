import React from 'react';
import '../App.css';
import Post from './Post.jsx';
import dataJson from '../posts.json';
import axios from 'axios';

class Posts extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            posts:dataJson.posts,
            title: "",
            url: "",
        }

        axios.get('http://www.mocky.io/v2/5d7193e0330000f7cf7799a1').then((result) => {
            this.setState({
                posts: result.data.posts
            })
        })
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

    _salvarPost(){
       
        var newId = this.state.posts[this.state.posts.length-1].id+1;
        var newPost = {
            id: newId,
            title: this.state.title,
            url: this.state.url
        }

        var posts = this.state.posts;
        posts.push(newPost);

        this.setState({
            posts: posts,
            title: "",
            url: ""
        });
    }

    render(){
        return (
            <div className="App">
                 {this.state.posts.map((post, key) => 
                    <Post key={key} id={post.id} like={post.like} _likePost={this._likePost} title={post.title} url={post.url} _removePost={this._removePost}/>
                 )}
                 <div>
                     <span>Titulo</span>
                     <input class="btn btn-primary" value={this.state.title} onChange={(e)=>{this.setState({title: e.target.value})}}/>
                 </div>
                 <div>
                     <span>URL</span>
                     <input value={this.state.url} onChange={(e)=>{this.setState({url: e.target.value})}}/>
                 </div>
                 <button onClick={() => {this._salvarPost()}}>salvar</button>
            </div>
        )
    }

}

export default Posts