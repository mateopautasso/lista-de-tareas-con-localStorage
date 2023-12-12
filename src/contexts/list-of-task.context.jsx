import { createContext, useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ListOfTask = createContext()

export default function ListOfTaskProvider({ children }) {
	const [filteredTaskList, setFilteredTaskList] = useState([])
	const [tasksInLocal, setTasksInLocal] = useLocalStorage('task-in-local', { tasks: [] })

	//Agregar una tarea a la lista
	const addTask = (titleTask) => {
		const lastIdInList = tasksInLocal.tasks[tasksInLocal.tasks.length - 1]?.id || 0
		const newTask = {
			title: titleTask,
			id: lastIdInList + 1,
		}
		const updatedTasksList = [...tasksInLocal.tasks, newTask]
		setTasksInLocal({ tasks: updatedTasksList })
	}

	//Borrar una tarea de la lista
	const removeTask = (taskId) => {
		const updatedTasksList = tasksInLocal.tasks.filter((task) => task.id !== taskId)
		const updatedFilteredTasksList = filteredTaskList.filter((task) => task.id !== taskId)
		setTasksInLocal({ tasks: updatedTasksList })
		setFilteredTaskList(updatedFilteredTasksList)
	}

	//Buscar una tarea en la lista
	const searchTask = (task) => {
		const taskToLower = task.toLowerCase()
		const filteredTask = tasksInLocal.tasks.filter((t) => {
			return t.title.toLowerCase().includes(taskToLower)
		})
		setFilteredTaskList(filteredTask)
	}

	//Modificar una tarea de la lista
	const changeTask = (newTitle, id) => {
		const updatedTasksList = tasksInLocal.tasks.map((task) => {
			if (task.id === id) {
				return {
					title: newTitle,
					id: id,
				}
			} else return task
		})
		setTasksInLocal({ tasks: updatedTasksList })
	}

	return (
		<ListOfTask.Provider value={{ tasksInLocal, filteredTaskList, addTask, removeTask, searchTask, changeTask }}>
			{children}
		</ListOfTask.Provider>
	)
}

export const useListOfTask = () => useContext(ListOfTask)
