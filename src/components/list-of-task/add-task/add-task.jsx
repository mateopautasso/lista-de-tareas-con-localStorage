import styles from './add-task.module.css'
import { useListOfTask } from '../../../contexts/list-of-task.context'
import handleFormData from '../utilities/handleFormData'

function FormAddTask() {
	const { addTask } = useListOfTask()

	const handleAddTask = (title) => {
		if (title !== '') addTask(title)
		else alert('Debe introducir una tarea!')
	}

	const handleSubmit = (e) => handleFormData(e, 'add_task', handleAddTask)

	return (
		<form className={styles.form_add_task} onSubmit={handleSubmit}>
			<div>
				<h3>Agregar una tarea</h3>
				<input type='text' id='add_task' name='add_task' />
			</div>
			<button>Agregar</button>
		</form>
	)
}
export default FormAddTask
