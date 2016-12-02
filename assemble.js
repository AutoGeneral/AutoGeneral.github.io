const assemble = require('assemble');
const fs = require('fs');
const path = require('path');

const app = assemble();

const indexPageContent = fs.readFileSync(path.join(__dirname, 'src', 'templates', 'index.hbs'));
const data = require(path.join(__dirname, 'src', 'data.json'));

app.page('index', {content: indexPageContent})
	.render(data, (err, view) => {
		if (err) throw err;
		fs.writeFileSync(path.join(__dirname, 'index.html'), view.content);
		console.log('DONE...');
	});
