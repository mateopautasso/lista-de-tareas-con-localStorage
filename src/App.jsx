import './App.css'
import ListOfTaskLayout from './layout/list-of-task.layout.jsx'
import ListOfTaskProvider from './contexts/list-of-task.context.jsx'

function App() {
	return (
		<>
			<h1 style={{ marginBottom: '24px', textDecoration: 'underline' }}>Lista de tareas</h1>
			<main className='app'>
				<ListOfTaskProvider>
					<ListOfTaskLayout />
				</ListOfTaskProvider>
			</main>
		</>
	)
}

export default App
