// /src/hooks/useFormInput.js

import { useState } from 'react';

function useFormInput(initialValue) {
  // const [value, setValue] = useState(initialValue);
  const [value, setValue] = useState(initialValue);

  function handleChange({ target: {value} }) {
    setValue(value);
  }

  return {
    value: value,
    handleChange,
  };
}

export default useFormInput;
