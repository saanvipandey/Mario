function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
    marioCoin = loadSound("coin.wav");
	marioGameOver = loadSound("gameover.wav");
	marioKick = loadSound("kick.wav");
	marioDie = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(600, 300);
	video.parent('game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotposes);
}

function modelLoaded()
{
	console.log("Model Loaded!");
}

function gotposes(results)
{
  if(results.length > 0)
  {
	  console.log(results);
	  nosex = results[0].pose.nose.x;
	  nosey = results[0].pose.nose.y;
	  
  }
}

function draw()
{
	game();
}







