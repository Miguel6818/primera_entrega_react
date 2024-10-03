import './App.css'

import Carrito from './components/carrito'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Badge from './components/Badge'

function App() {  
  return (
     <>
     <NavBar />
     <ItemListContainer text= 'Próximamente estarán los productos' />
    </>
  )
}


export default App
