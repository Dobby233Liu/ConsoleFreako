// pls use it in chrome://dino

function ArcGiltch(RunnerInstance){
	RunnerInstance.isArcadeMode = false;
	RunnerInstance.setArcadeMode(false);
}

ArcGiltch(Runner.instance_);

// optional thing is in below
Runner.instance_.setSpeed(2048*2048);
Runner.instance_.gameOver = function(){};