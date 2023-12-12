import { useState } from 'react'
import { useListOfTask } from '../../../../contexts/list-of-task.context'
import handleFormData from '../../utilities/handleFormData'
import styles from './task.module.css'

function Task({ title, id }) {
	const { removeTask, changeTask } = useListOfTask()
	const [activeForm, setActiveForm] = useState(false)

	const handleNewTitle = (newTitle) => {
		if (newTitle !== '') changeTask(newTitle, id)
		setActiveForm(false)
	}

	const handleSubmit = (e) => handleFormData(e, 'new_title_task', handleNewTitle)

	return (
		<li className={styles.li}>
			{!activeForm ? (
				<p>{title}</p>
			) : (
				<form onSubmit={handleSubmit}>
					<input type='text' name='new_title_task' />
					<button title='Modificar'>✅</button>
				</form>
			)}

			<div className={styles.task__options}>
				<button onClick={() => setActiveForm(!activeForm)} title='Modificar'>
					{!activeForm ? '📝' : '✖'}
				</button>
				<button onClick={() => removeTask(id)} title='Eliminar'>
					❌
				</button>
			</div>
		</li>
	)
}
export default Task
