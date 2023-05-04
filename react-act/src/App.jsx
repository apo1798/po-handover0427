import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Person from './components/Person'

function App1() {
  const [count, setCount] = useState(0)
  const [isSenior, setIsSenior] = useState(false)
  // const isSenior = false

  const name1 = 'apo'
  const name2 = 'audi'

  const handleButtonClick = (e) => {
    console.log({isSenior}, 'old')

    const newValue = !isSenior
    setIsSenior(newValue)

    setIsSenior((state) => {
      console.log({state}, 'new')
      return state
    } )

  }

  const person = {name: 'Bob', age: 12, isCute: true}


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{isSenior ? name2:name1}</h1>

      <Person info={person} nationality='tw' family={5} isHappy={true}>
       Hi Person Component!!^_^!!
      </Person>


      <button onClick={handleButtonClick}>Toggle</button>
      <div className="card">

        <button onClick={() => {
            setCount((count) => count + 1)  // setCount((2) => 2 + 1), setCount(3)
            setCount((count) => count + 1)  // setCount(3 => 3+1), setCount(4)
            setCount((count) => count + 1)      
            setIsSenior(true)
          }}
        >
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Counter></Counter>
    </>
  )
}

export default App1
