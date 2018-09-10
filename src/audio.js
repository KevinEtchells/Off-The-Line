var game = game || {};
game.playSound = function (type) {
    if (type === "start") {
        with(new AudioContext)[1,1,1,2,5].map((v,i)=>{with(createOscillator())v&&start(e=[2,4,6,3,1][i]/5,connect(destination),frequency.value=988/1.06**v,type='triangle',)+stop(e+.2)});
    } else if (type === "point") {
        with(new AudioContext)[5].map((v,i)=>{with(createOscillator())v&&start(e=[1][i]/5,connect(destination),frequency.value=988/1.06**v)+stop(e+.2)});
    } else if (type === "control") {
        with(new AudioContext)[10].map((v,i)=>{with(createOscillator())v&&start(e=[1][i]/5,connect(destination),frequency.value=988/1.06**v)+stop(e+.2)});
    } else if (type === "lose") {
        with(new AudioContext)[12,13,14,15,16,17,18,19].map((v,i)=>{with(createOscillator())v&&start(e=[1,2,3,4,5,6,7,8][i]/5,connect(destination),frequency.value=988/1.06**v,type='triangle',)+stop(e+.2)});
    } else if (type === "warning") {
        with(new AudioContext)[26,26,26,26,26,26].map((v,i)=>{with(createOscillator())v&&start(e=[1,3,7,9,13,15][i]/5,connect(destination),frequency.value=988/1.06**v,type='triangle',)+stop(e+.2)});
    } else if (type === "out-of-time") {
        with(new AudioContext)[20,20,20,20].map((v,i)=>{with(createOscillator())v&&start(e=[1,5,9,13][i]/5,connect(destination),frequency.value=988/1.06**v,type='triangle',)+stop(e+.2)});
    }
};