var filter = new Tone.Filter(9000);
filter.toMaster()

var env = new Tone.FrequencyEnvelope({
    attack: 0,
    decay: '2m',
    sustain: 0,
    release: 0,
    baseFrequency: 20000,
    octaves: 4,
    exponent: 2,
    decayCurve: 'exponential'
});

function sweeper(){
    env.triggerAttackRelease('1m');
    console.log('trig');
    
}

env.connect(filter.frequency);



var amen = new Tone.Player("./Sounds/Amen.wav").connect(filter);
amen.setLoopPoints(0,'1m');
amen.loop = true;
amen.fadeOut = '.05s'



var seeker = document.querySelector(".seeker");
var stopper = document.querySelector(".stop");
var reverseToggle = document.querySelector(".revToggle");

reverseToggle.addEventListener('click',function(){
    amen.reverse? amen.reverse = false : amen.reverse = true;
})

stopper.addEventListener('click',function(){
    amen.stop('@8n');
})

seeker.addEventListener("click",function(){
    amen.seek("4n","@16n")
})


var button = document.querySelector("button")
button.addEventListener("click", function(){
    Tone.Transport.start();
    console.log("start");
    amen.start();
})

var time = document.querySelector('.timer') 

Tone.Transport.bpm.value = 163;
Tone.Transport.setLoopPoints(0,'2m');
Tone.Transport.loop = true;



console.log(Tone.Transport.position);

setInterval(function(){
    time.textContent = Tone.Transport.position;
},10)