// arquivo scr/UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { name, email, avatar } = this.props.person;
    return (
      <div>
        <p> Nome: { name } </p>
        <p> E-mai: { email } </p>
        <Image source={ avatar } alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;