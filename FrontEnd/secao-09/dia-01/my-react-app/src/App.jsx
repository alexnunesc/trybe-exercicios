import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [values, setValues] = useState({
    name: '',
    idade: 0,
    cidade: '',
    n: '',

  });

  const handleChange = ({target: { name, value }}) => {
    setValues(({
      ...values,
      [name]: value,
    }))
  };
  console.log(values)

  return (
    <div className="App">
      <div className="card">
        <input type="text" name='name' placeholder='name'  onChange={ handleChange } />

        <input type="number" name='idade' placeholder='idade' onChange={ handleChange } />

        <input type="text" name='cidade' placeholder='cidade' onChange={  handleChange } />

        <br />
        <label htmlFor="">
          Fundamentos:
          <input type="radio" name="n" id="" value='Fundamentos' checked={ values.n === 'Fundamentos' } onChange={  handleChange } />
        </label>
        <br />

        <label htmlFor="">
          Front-end:
          <input type="radio" name="n" onChange={  handleChange } value='Front-End' checked={ values.n === 'Front-End' } />
        </label>
        <br />

        <label htmlFor="">
          Back-end:
          <input type="radio" name="n" onChange={  handleChange } value='back-end' checked={ values.n === 'back-end' } />
        </label>
        <br />

        <label htmlFor="">
          Ciência da Computação:
          <input type="radio" name="n" onChange={  handleChange } value='Ciência da Computação' checked={ values.n === 'Ciência da Computação' } />
        </label>
        <br />

        <button onClick={ () => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
