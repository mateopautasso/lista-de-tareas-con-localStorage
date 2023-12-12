import Task from '../task/task'
import styles from './list-task.module.css'
function ListTask({ list }) {
	return (
		<ul className={styles.list_task_asd}>
			{list.map((task) => (
				<Task title={task.title} id={task.id} key={task.id} />
			))}
		</ul>
	)
}
export default ListTask
