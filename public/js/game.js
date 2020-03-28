var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  } 
};
 
var game = new Phaser.Game(config);
 
function preload() {}
 
function create() 
{
  this.socket = io();
  graphics.lineStyle(5, 0xFF00FF, 1.0);
  graphics.beginPath();
  graphics.moveTo(100, 100);
  graphics.lineTo(200, 200);
  graphics.closePath();
  graphics.strokePath();
}
 
function update() {}