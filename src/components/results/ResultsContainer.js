import React from 'react';
import axios from 'axios';
import ResultComponent from './ResultComponent';
import { withRouter } from 'react-router-dom';

class ResultContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      allRun: null
    }
  }
  componentDidMount() {
    let _self = this;
    const eventId = this.props.match.params.eventId;
    const roundId = this.props.match.params.roundId;

    axios.get(`http://178.128.146.85:3333/events/${eventId}/rounds/${roundId}/results`)
      .then(res => {
        _self.setState({ results: res, allRun: (res.data.filter(t => !t.hasRidden).length == 0) });
      });
  }

  render() {
    return (
      <>
        {this.state.results && <ResultComponent results={this.state.results} allRun={this.state.allRun} />}
      </>
    );
  }
}
export default withRouter(ResultContainer);