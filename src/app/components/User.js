import React from 'react';
export class User extends React.Component {
    render(){
        return(
            <div>
                <h3>Name: {this.props.user.name}</h3>
                <p>Age: {this.props.user.age}</p>
            </div>
        )
    }
}
