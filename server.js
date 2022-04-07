// const app = require('./config/configuration')();
const app = require('./config/configuration')();
const port = app.get('port');
const ip = require('ip');
const host = ip.address();

app.listen(port, () => {
	console.log(`Host: ${host} Server on port: ${port}`)
})