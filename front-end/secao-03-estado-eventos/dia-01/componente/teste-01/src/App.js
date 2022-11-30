import React from 'react';

function b1() {
console.log('1!')
}

class App extends React.Component {
  constructor() {
    super()
    this.b2 = this.b2.bind(this)
    /* this.b3 = this.b3.bind(this) */
  }

  b2() {
    console.log('2!')
  }

  state = {
    cliques: 0,
  }

  b3 = () => {
    this.setState((prevState, _props) => ({
      cliques: prevState.cliques + 1,
    }));
    { color(cliques) }
  }
  
  color = (num) => num % 2 === 0 ? "green" : "red";

  render() {
    const { cliques } = this.state;
    return (
      <>
        <button onClick={b1}>1!</button>
        <button onClick={this.b2}>2!</button>
        <button
          type='button'
          onClick={this.b3}>
          {`Botão ${ cliques }`}
          style={{ backgroundColor: this}}
        </button>
      </>
    )
  };
}

export default App;
