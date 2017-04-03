import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuthHOC = (ComposedComponent) => {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }
    componentWillMount(){
      const { authenticated } = this.props;
      if(!authenticated) {
        this.context.router.history.push('/');
      }

    }
    componentWillUpdate(nextProps){
      const { authenticated } = nextProps;
      if(!authenticated) {
        this.context.router.history.push('/');
      }

    }
    render(){
      // console.log('this.context: ', this.context);
      // console.log('this.props: ', this.props);
      return (<ComposedComponent {...this.props} />);
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.authenticated
    }
  }

  return connect(mapStateToProps, null)(Authentication);
}

export default requireAuthHOC;
