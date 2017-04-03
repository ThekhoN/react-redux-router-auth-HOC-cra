import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { authenticate } from '../../actions';
import { connect } from 'react-redux';

class HeaderComponent extends Component {
  constructor(props){
    super(props);
    this.authButton = this.authButton.bind(this);
  }
  authButton(){
    const { authenticated } = this.props;
    if(!authenticated) {
      return (<button onClick={()=>{this.props.updateAuth(true)}}>Sign in</button>)
    }
    else {
      return (<button onClick={()=>{this.props.updateAuth(false)}}>Sign out</button>)
    }
  }
  render(){
    console.log('this.props: ', this.props);
    return (
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/resources'>
                  Resources
                </Link>
              </li>
              <li>
                {this.authButton()}
              </li>
            </ul>
          </nav>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAuth: (signInStatus) => {
      dispatch(authenticate(signInStatus));
    }
  }
}

const Header  = connect(
  mapStateToProps,
  mapDispatchToProps
)( HeaderComponent );

export default Header;
