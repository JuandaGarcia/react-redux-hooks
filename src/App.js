import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCounter, decreaseCounter } from './redux/actions'

const App = () => {
	const count = useSelector((state) => state.count)
	const dispatcher = useDispatch()

	const add = () => dispatcher(addCounter())
	const decrease = () => dispatcher(decreaseCounter())

	return (
		<div>
			<header>
				<h3>Counter with Redux Hooks {count}</h3>
				<button onClick={add}>ADD +1</button>
				<button onClick={decrease}>DECREASE -1</button>
			</header>
		</div>
	)
}

export default App
