function getData() {
	fetch('http://localhost:5000/get-data')
		.then(response => response.json())
		.then(data => {
			console.log(data)
			renderMessage(data)
		})
}

function renderMessage(data) {
	let screen = document.createElement('div')
	screen.id = 'screen'
	screen.innerHTML = data.html
	document.body.appendChild(screen)
}

function previewBtn(newsletterId) {
	window.Telegram.WebApp.close()
	const dataToSend = { id: newsletterId }
	console.log(dataToSend)
	fetch('http://127.0.0.1:5000/open-preview', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(dataToSend),
	})
		.then(response => response.json())
		.then(data => {
			console.log('Response from server:', data)
		})
		.catch(error => {
			console.error('Error:', error)
		})
}
