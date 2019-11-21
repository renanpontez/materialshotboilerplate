import React from 'react';
import axios from 'axios';
import RoundsComponent from './RoundsComponent';
import { withRouter } from 'react-router-dom';

class RoundsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      event: null
    }
  }
  componentDidMount() {
    let _self = this;
    let eventId = this.props.match.params.eventId;

    axios.get(`http://178.128.146.85:3333/events/${eventId}/rounds`)
      .then(res => {
        _self.setState({ results: res });
      });

    axios.get(`http://178.128.146.85:3333/events/${eventId}`)
      .then(res => {
        _self.setState({ event: res });
      });
  }

  render() {
    return (
      <>
        {this.state.results && this.state.event && <RoundsComponent event={this.state.event} results={this.state.results}/>}
      </>
    );
  }
}

export default withRouter(RoundsContainer);