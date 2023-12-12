import FormAddTask from '../components/list-of-task/add-task/add-task'
import TasksAdded from '../components/list-of-task/task-added/task-added.jsx'
import FilteredTasks from '../components/list-of-task/filtered-tasks/filtered-tasks.jsx'
import styles from './list-of-task.layout.module.css'
import { useRef } from 'react'
function ListOfTaskLayout() {
	const ref = useRef()

	const handleSwap = (direction) => {
		const container = ref.current
		if (direction === 'left') {
			container.scrollTo({ left: 0, behavior: 'smooth' })
		} else if (direction === 'right') {
			container.scrollTo({ left: 400, behavior: 'smooth' })
		}
	}

	return (
		<>
			<section className={styles.main_container}>
				<div className={styles.swap_container} ref={ref}>
					<div className={styles.swap_card}>
						<FormAddTask />
						<TasksAdded />
					</div>
					<div className={styles.swap_card}>
						<FilteredTasks />
					</div>
				</div>
			</section>
			<div className={styles.button_container}>
				<button onClick={() => handleSwap('left')}>⬅</button>
				<button onClick={() => handleSwap('right')}>➡</button>
			</div>
		</>
	)
}
export default ListOfTaskLayout
