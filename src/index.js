import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// Importamos desde redux la función para crear nuestro store
import { createStore } from 'redux'
// El Provider lo traeremos desde react-redux
import { Provider } from 'react-redux'
// También debemos traer nuestro reducer que acabamos de crear
import { reducer } from './redux/reducer'

const initialState = {
	count: 0,
}

// La función de createStore primero debe recibir nuestro reducer y después el estado inicial
const store = createStore(reducer, initialState)

// Encerramos nuestra aplicación en el Provider y a este le pasamos el store
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
