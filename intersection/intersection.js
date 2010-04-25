//A stoplight controller for an N-way intersection

//Practice with object oriented programming in javascript and canvas

//There can be N lights, each with 3 possible states (green, yellow, or red)


LIGHT_STATES = {
  green: 0,
  yellow: 1,
  red: 2
}

COLOR_CODES = [ "green", "yellow", "red" ];

SYSTEM_STATES = [
  { interval: 5000, lights: [ LIGHT_STATES.green, LIGHT_STATES.green, LIGHT_STATES.red, LIGHT_STATES.red ] },
  { interval: 1000, lights: [ LIGHT_STATES.yellow, LIGHT_STATES.yellow, LIGHT_STATES.red, LIGHT_STATES.red ] },
  { interval: 5000, lights: [ LIGHT_STATES.red, LIGHT_STATES.red, LIGHT_STATES.green, LIGHT_STATES.green ] },
  { interval: 1000, lights: [ LIGHT_STATES.red, LIGHT_STATES.red, LIGHT_STATES.yellow, LIGHT_STATES.yellow ] }
];

LIGHT_POSITIONS = [{x: 50, y: 100},
                   {x: 200, y: 100},
                   {x: 125, y: 50},
                   {x: 125, y: 150}];

lightController = {
  initialize: function()
  {
    this.nextState();
  },

  nextState: function(){
    var interval = SYSTEM_STATES[this.state].interval;
    var currentState = this.state;
    this.draw();
    if( this.state < ( SYSTEM_STATES.length - 1 ) )
    {
      this.state = this.state + 1; 
    }
    else
    {
      this.state = 0
    }
    setTimeout( this.nextState.bind(this), interval  );
  },

  state: 0,

  draw: function(){  
    for( i = 0; i < SYSTEM_STATES[this.state].lights.length; i++ ){
    var canvas = document.getElementById("canvas");  
      if (canvas.getContext) {  
        var ctx = canvas.getContext("2d");  
        ctx.beginPath();
        ctx.arc(LIGHT_POSITIONS[i].x,LIGHT_POSITIONS[i].y,20,0,Math.PI*2,true); // Outer circle
        ctx.fillStyle = COLOR_CODES[SYSTEM_STATES[this.state].lights[i]];
        ctx.fill();
      }  
    }
  }  
}

function go() {
  lc = Object.create(lightController);
  lc.initialize();
}
