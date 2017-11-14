var json2xls = require('json2xls');
var fs = require('fs');
const exec = require('child_process').exec;
var final=[];
for(var i =0;i<=9;i++){
setTimeout(function function1(){
	var yourscript = exec('sh tput.sh',
        (error, stdout, stderr) => {	    
	    var result = stdout.toString().replace(/\n|\r/g,"");
	    result = result.toString().replace(/'/g,'"');	
	    result = JSON.parse(result);
	    final.push(result);
	    console.log(`${stderr}`);
	    var xls = json2xls(final);
	    fs.writeFileSync('dataset.xlsx',xls,'binary');
		
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }console.log(final);
        });}
,i*3000);

}


