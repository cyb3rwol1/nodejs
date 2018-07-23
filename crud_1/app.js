var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {

	if(c == 60) restartCount(); 
    c = c + 1;
    t = setTimeout(timedCount, 1000);
}

function startCount() {
	console.log("Iniciando...");
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function restartCount() {
    clearTimeout(t);
    timer_is_on = 0;
    startCount()
    console.log("Finalizou!");
}

startCount();