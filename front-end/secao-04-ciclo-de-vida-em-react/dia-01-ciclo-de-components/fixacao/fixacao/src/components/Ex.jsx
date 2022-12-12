import React, { Component } from 'react';

export default class Ex extends Component {
  state = {
    carregando: true,
    dados: undefined,
    age: false,
  };

  api = async() => {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    console.log(data.results);
    this.setState({
      dados: data.results,
      carregando: false,
      age: data.results.some((idade) => idade.dob.age > 50),
    });
  };

  componentDidMount() {
    this.api();
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { age } = this.state;
    return !(age);
  };

  render() {
    const { dados, carregando } = this.state;
    /* const { name, email, dob, picture } = dados; */
    const elementCarregando = <p>Carregando...</p>;
    return (
      <div>
        
        <p>Inicio!</p>
        { carregando ? elementCarregando :
        dados.map((obj) => (
          <div>
            <img src={ obj.picture.large } alt="" />
            <p>{ obj.name.first }</p>
            <p>{ obj.dob.age }</p>
            <p>{ obj.email }</p>
          </div>)
        ) }
        
      </div>
    )
  }
}
