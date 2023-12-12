import ListTask from '../components/list/list-task'
import { useListOfTask } from '../../../contexts/list-of-task.context'
import styles from './task-added.module.css'
function TasksAdded() {
	const { tasksInLocal } = useListOfTask()
	const tasks = tasksInLocal.tasks

	return (
		<>
			<div className={styles.section}>
				<h3>Agregadas recientemente:</h3>
				{tasks.length !== 0 ? (
					<ListTask list={tasks} />
				) : (
					<p style={{ textAlign: 'center', marginBlock: '12px', fontSize: '1.4rem' }}>No hay tareas agregadas.</p>
				)}
			</div>
		</>
	)
}
export default TasksAdded
