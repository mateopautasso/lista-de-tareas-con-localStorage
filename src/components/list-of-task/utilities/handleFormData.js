const handleFormData = (e, nameInput, callback) => {
	e.preventDefault()
	const form = e.currentTarget
	const formData = new FormData(form)
	callback(formData.get(nameInput))
	form.reset()
}
export default handleFormData
