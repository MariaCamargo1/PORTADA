import './App.css'
import {Titulo} from './components/Titulo'
import {Subtitulo} from './components/Subtitulo'
import {Destacado} from './components/Destacado'
import {Footer} from './components/Footer'

function App() {
  return(
    <article className="portada">
      <Titulo />
      <Subtitulo />
      <Destacado />
      <Footer />
    </article>
  )
}

export default App