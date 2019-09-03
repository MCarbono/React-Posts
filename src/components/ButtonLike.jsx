import React from 'react';
import '../App.css';

class ButtonLike extends React.Component {

    render(){
        return (
            <button className={this.props.like === true ? "like": ""} onClick={() => this.props._likePost(this.props.id)}>   
                Like
            </button>
        )
    }
}

export default ButtonLike