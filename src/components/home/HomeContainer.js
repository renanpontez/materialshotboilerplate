import React from 'react';
import HomeComponent from './HomeComponent';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <HomeComponent />
      </>
    );
  }
}
export default HomeContainer;