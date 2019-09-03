import React from 'react';
import '../App.css';

class ButtonRemove extends React.Component {
    render(){
        return(
            <button className={"button-remove"} onClick={()=> this.props._removePost(this.props.id)}>
                X
            </button>
        )
    }
}

export default ButtonRemove