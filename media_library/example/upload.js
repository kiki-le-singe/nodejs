
var form = document.getElementById('form'),
	inputFiles = document.getElementById('files'),
	infos = document.getElementById('infos');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	var fd = new FormData(),
		xhr = new XMLHttpRequest(),
		files = inputFiles.files;

	xhr.open('POST', form.getAttribute('action'), true);

	xhr.addEventListener('readystatechange', function(event) {
		if (this.readyState === 4) {
			console.log('readyState === 4');
			// infos.innerHTML += event.target.responseText;
		}
	});

	xhr.addEventListener('load', function(event) {
		var json = JSON.parse(event.target.responseText);
		
		console.log(json);
		console.log(json.fields);
		console.log(json.files.file);

		infos.innerHTML += 'Loading finish...';
	});

	// console.log(fd);
	// console.log(xhr);
	// console.log(inputFiles);
	// console.log(files);
	// console.log(files.length);
	// console.log(files[0].name);

	infos.innerHTML += 'Envoi du fichier: ' + files[0].name + '<br>';

	fd.append('username', 'johndoe');
	fd.append('id', 123456);
	fd.append('file', files[0]);

	// Send datas.
	xhr.send(fd);
});