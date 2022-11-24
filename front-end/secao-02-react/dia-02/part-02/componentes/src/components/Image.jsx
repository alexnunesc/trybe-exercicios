// arquivo scr/Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img width='300px' src={ source } alt={ alternativeText } />;
  }
}

export default Image;