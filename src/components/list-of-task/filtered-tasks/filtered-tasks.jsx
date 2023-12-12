import ListTask from '../components/list/list-task'
import { useListOfTask } from '../../../contexts/list-of-task.context'
import handleFormData from '../utilities/handleFormData'
import styles from './filtered-tasks.module.css'
function FilteredTasks() {
	const { filteredTaskList, searchTask } = useListOfTask()

	const handleSubmit = (e) => handleFormData(e, 'search_task', searchTask)

	return (
		<>
			<div className={styles.section}>
				<div>
					<h3>Buscar una tarea</h3>
					<form onSubmit={handleSubmit}>
						<input type='text' name='search_task' id='' />
						<button>Buscar</button>
					</form>
				</div>
				<div>
					<h3>Última búsqueda:</h3>
					{filteredTaskList.length > 0 ? (
						<ListTask list={filteredTaskList} />
					) : (
						<p style={{ textAlign: 'center', marginBlock: '12px', fontSize: '1.4rem' }}>
							No hay resultados disponibles.
						</p>
					)}
				</div>
			</div>
		</>
	)
}
export default FilteredTasks
