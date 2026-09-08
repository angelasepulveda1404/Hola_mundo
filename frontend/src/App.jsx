import { useState } from 'react'

function App() {
  const [mensajes, setMensajes] = useState([])

  function buscarTodos() {
    fetch('http://127.0.0.1:8000/mensajes')
      .then((response) => response.json())
      .then((data) => setMensajes(data))
  }

  function buscarUno(id) {
  fetch(`http://127.0.0.1:8000/mensajes/${id}`)
    .then((response) => response.json())
    .then((data) => setMensajes([data]))
  }

  return (
    <>
      <h1>Hola Mundo Full Stack</h1>

      <button onClick={buscarTodos}>
        Mostrar todos los mensajes
      </button>

      <button onClick={() => buscarUno(1)}>Mensaje 1</button>
      <button onClick={() => buscarUno(2)}>Mensaje 2</button>
      <button onClick={() => buscarUno(3)}>Mensaje 3</button>
      <button onClick={() => buscarUno(4)}>Mensaje 4</button>
      <button onClick={() => buscarUno(5)}>Mensaje 5</button>

      <ul>
        {mensajes.map((mensaje) => (
          <li key={mensaje.id}>
            {mensaje.id} - {mensaje.texto}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App