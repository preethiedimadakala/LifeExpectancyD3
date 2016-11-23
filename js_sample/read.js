const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('Book1.csv')
});

	var first;
	var res;
	fs.writeFile("sample.json","");
	rl.on('line', (line) => {

	first = line;
	// first.push(line);
	res=first.split(",");
	  fs.appendFile("sample.json",JSON.stringify(res)+'\n');
	  // fs.writeFile("sample.json",JSON.stringify(res)+ '\n');
	});
