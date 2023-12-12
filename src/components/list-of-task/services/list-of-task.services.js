class ListOfTask {
	constructor(tasks) {
		this.tasks = tasks
		this.filtered_tasks = []
	}

	addTask(title) {
		const newId = this.tasks[this.tasks.length - 1]?.id || 0
		const newTask = {
			title,
			id: newId,
		}
		const newStateOfTasks = [...this.tasks, newTask]
		this.tasks = newStateOfTasks
		return newStateOfTasks
	}

	removeTask(id) {
		const newStateOfTasks = this.tasks.filter((task) => task.id !== id)
		this.tasks = newStateOfTasks
		return newStateOfTasks
	}

	searchTask(keyword) {
		const keywordToLower = keyword.toLowerCase()
		const newStateOfFilteredTasks = this.filtered_tasks.filter((task) => {
			return task.title.toLowerCase().includes(keywordToLower)
		})
		this.filtered_tasks = newStateOfFilteredTasks
		return newStateOfFilteredTasks
	}

	changeTask(newTitle, id) {
		const newStateOfTasks = this.tasks.map((task) => {
			if (task.id === id) {
				return {
					...task,
					title: newTitle,
				}
			} else return task
		})
		this.tasks = newStateOfTasks
		return newStateOfTasks
	}
}
