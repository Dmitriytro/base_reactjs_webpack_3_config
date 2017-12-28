import React from 'react';
import {connect} from 'react-redux';

import {User} from '../components/user';
import {addUser} from '../actions/userActions';

class App extends React.Component {
    addUser(){
        const user = {name:'Daria',age:26};
        this.props.addUser(user)
    }
    render(){
        return(
            <div className="container">
                <ul>
                    {this.props.user.users.map( (user,i) => <li key={i}><User user={user}/></li> )}
                </ul>
                <button className="btn btn-primary" onClick={this.addUser.bind(this)}>AddUser</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        addUser: (user) => dispatch(addUser(user))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(App)