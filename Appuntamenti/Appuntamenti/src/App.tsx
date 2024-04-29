
import './App.css'
import Card from './components/card'
import { data } from './data/data'

function App() {
  return (
    <>
    {

      data.map(u => {

        return <Card {...u}></Card>

      } )

    }
    </>
  )
}

export default App
