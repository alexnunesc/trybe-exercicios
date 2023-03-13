import React from 'react';
// import Swal from 'sweetalert2';
import './App.css';
import useFormInput from './hooks/useFormInput';

function App() {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();

    // Swal.fire(
    //   'Formulário enviado',
    //   JSON.stringify({
    //     firstName,
    //     lastName,
    //     email,
    //   }),
    //   'success'
    // );
    alert('dsubvs');
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label onSubmit={handleSubmit}>
          First name:
          <input value={firstName.value} onChange={firstName.handleChange} />
        </label>
        <label>
          Last name:
          <input value={lastName.value} onChange={lastName.handleChange} />
        </label>
        <label>
          E-mail:
          <input value={email.value} onChange={email.handleChange} />
        </label>
        <button type="submit">Submeter formulário</button>
      </form>
    </div>
  );
}

export default App;
