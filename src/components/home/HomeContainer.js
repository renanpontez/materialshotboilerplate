import React from 'react';
import HomeComponent from './HomeComponent';
import axios from 'axios';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null
    }
  }

  componentDidMount() {
    let _self = this;

    axios.get('http://178.128.146.85:3333/events/')
      .then(res => {
        _self.setState({ results: res });
      });
  }
  

  render() {
    return (
      <>
        {this.state.results && <HomeComponent results={this.state.results} />}
      </>
    );
  }
}
export default HomeContainer;