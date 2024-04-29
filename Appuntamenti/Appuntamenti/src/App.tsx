
import './App.css'
import Card from './components/card'
import { data } from './data/data'

function App() {
  return (
    <>
    <h1 className='mb-10 bold'>Prossimi Incontri</h1>
    {

      data.map(u => {

        return <Card {...u}></Card>

      } )

    }
    </>
  )
}

export default App
