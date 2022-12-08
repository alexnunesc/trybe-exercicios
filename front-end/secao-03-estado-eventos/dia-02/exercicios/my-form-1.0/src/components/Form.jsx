import React from "react";

class Form extends React.Component {
  state = {
    name: '',
    number: 0,
    textarea: '',
    select: '',
    check: false,
    fileInput: null,
  }

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    console.log('ufjshfj');
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    })
  }

  render() {
    const { name, number, textarea, check, fileInput} = this.state;
    return (
      <>
      <form>
        <fieldset>
          <label htmlFor="name">
            <p>Nome: </p>
            <input
              type="text"
              name="name"
              id="name"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="number">
            <p>Número: </p>
            <input
              type="number"
              name="number"
              id="number"
              value={ number }
              onChange={ this.handleChange }
            />
          </label>

          <select name="select" id="select" onChange={ this.handleChange }>
            <option value="11111">1</option>
            <option value="22222">2</option>
        </select>
        </fieldset>

        <label htmlFor="textarea">
          <p>Frase: </p>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            value={ textarea }
            onChange={ this.handleChange }
            >
          </textarea>
        </label>
        <label htmlFor="check">
          <p>selecione: </p>
          <input type="checkbox" name="check" id="check" value={check} onClick={ this.handleChange } />
        </label>
        <label htmlFor="fileInput">
          <p>Arquivos</p>
          <input type="file" name="fileInput" id="fileInput" value={fileInput} onChange={ this.handleChange }/>
        </label>
      </form>
      </>
    );
  }
}

export default Form;
