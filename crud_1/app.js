var t;

function timedCount() {
	console.log("Iniciando...");
	
    console.log("Finalizou!");
    executeProcess();
}

function executeProcess() {
    t = setTimeout(timedCount, 3000);
}

executeProcess();