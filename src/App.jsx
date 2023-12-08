import { CounterApp } from "./CounterApp"
import { Hello } from "./Hello"

function App() {
  return (
    <>
      <h1>Hola mundo!!!</h1>
      <Hello />
      <CounterApp value={3} />
    </>
  )
}

export default App
