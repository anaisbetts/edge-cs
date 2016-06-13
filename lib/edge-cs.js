var path = require('path');

exports.getCompiler = function () {
	var compiler = process.env.EDGE_CS_NATIVE || (process.env.EDGE_USE_CORECLR ? path.join(__dirname, 'edge-cs-coreclr', 'edge-cs-coreclr.dll') : path.join(__dirname, 'edge-cs.dll'));
	return compiler.replace('app.asar', 'app.asar.unpacked');
};
