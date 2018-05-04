import React from 'react';
import {connect} from 'react-redux';
import Newsfeed from 'Newsfeed';
import Login from 'Login';
import ChatRoom from 'ChatRoom';
import {login_error,login_success} from 'userAction';
import {BrowserRouter as Router,Route,Switch,hashHistory,Redirect,NavLink,withRouter,Link} from 'react-router-dom';

class IndexHome extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    var {dispatch} = this.props;
    let that = this;
    if(localStorage.email){
      console.log("localStorage", localStorage.email);
    }else{ console.log("khong ton tai email in local")}
    io.socket.post('/user/getUser', {email:localStorage.email}, function(resData, jwres){
      console.log("getUser: ", resData);
      if(resData.error){
        dispatch(login_error());
      }
      if(resData.notFound){
        dispatch(login_error());
      }else{
        dispatch(login_success(resData.user));
      }
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({...this.state,isLogin: nextProps.isLogin});
  }
  render(){
    if(!this.props.isLogin){
      return ( <Login />)
    }else{
      return(
        <div>
          <Switch>
                <Route  exact path="/" component={Newsfeed} />
                <Route  exact path="/home" component={Newsfeed} />
                <Route  exact path="/newsfeed" component={Newsfeed} />
                <Route  exact path="/newsfeed/notify" component={ChatRoom} />
                <Route  exact path="/newsfeed/chatroom" component={ChatRoom} />
                <Route render={function(){
                  return <p> not found in home</p>
                } } />
          </Switch>
        </div>
      )
    }
  }
}
module.exports = withRouter(connect( function(state){
  return {user: state.userReducer.user,isLogin: state.userReducer.isLogin};
})(IndexHome));