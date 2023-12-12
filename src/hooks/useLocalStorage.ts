import { useState } from 'react'
type ValueReturn = [object, (newValue: object) => void]

const useLocalStorage = (key: string, initialState: object): ValueReturn => {
	const initialStateToString = JSON.stringify(initialState)

	const [localStorage, setLocalStorage] = useState(() => {
		const dataInLocal = window.localStorage.getItem(key)

		if (dataInLocal) return JSON.parse(dataInLocal)
		window.localStorage.setItem(key, initialStateToString)
		return initialState
	})

	const changeInitialState = (newValue: object): void => {
		window.localStorage.setItem(key, JSON.stringify(newValue))
		setLocalStorage(newValue)
	}

	return [localStorage, changeInitialState]
}

export default useLocalStorage
