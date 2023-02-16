import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {

  const [caixa, setCaixa] = useState([
    {
      id: 0,
      title: "1",
      status: 0,
    },
    {
      id: 1,
      title: "2",
      status: 0,
    }
  ])

  const [desmarcar, setDesmarcar] = useState(0);
  // const [marcar, setMarcar] = useState(false);

  useEffect(() => {
  
    setCaixa({
      ...caixa,
      status: desmarcar
    })
  },[desmarcar])

  console.log(desmarcar);
  // console.log(caixa);


  return (
    <div className="App">
        {
          [caixa].map((e) => (
            <div key={e.id}>
              <p>{e.title}</p>
              <button onClick={ () => setDesmarcar((desmarcar) => desmarcar + 1)}>marcar</button>
              <button onClick={ () => setDesmarcar((desmarcar) => desmarcar - 1)}>desmarcar</button>
            </div>
          ))
        }
    </div>
  )
}

export default App
