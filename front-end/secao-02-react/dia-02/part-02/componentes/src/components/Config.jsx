// arquivo scr/App.js, criado pelo create-react-app, modificado
import React from 'react';
import UserProfile from './UserProfile';
import data from './data';

class Config extends React.Component {
  render() {
    return (
      <div>
      {data.map((data, index) => (
        <UserProfile key={index} person={data} />
      ))}
      </div>
    )
  }
}

export default Config;