var play = true;
// var rain_S = document.getElementById("rainV");
// var thunder_S = document.getElementById("thunderV");
// var wind_S = document.getElementById("windV");
// var cricket_S = document.getElementById("cricketV");
// var storm_S = document.getElementById("stormV");
// var bird_S = document.getElementById("birdV");
// var fire_S = document.getElementById("fireV");
// var wave_S = document.getElementById("wavesV");
// var leave_S = document.getElementById("leavesV");
// var v_rain = rain_S.value;
// var v_thunder = thunder_S.value;
// var v_wind = wind_S.value;
// var v_cricket = cricket_S.value;
// var v_storm = storm_S.value;
// var v_bird = bird_S.value;
// var v_fire = fire_S.value;
// var v_wave = wave_S.value;
// var v_leave = leave_S.value;

function initAudio() {
    //document.getElementById("rain").volume = .5;
    document.getElementById("rain").play();
    //document.getElementById("storm").volume = .5;
    document.getElementById("storm").play();
    //document.getElementById("wind").volume = .5;
    document.getElementById("wind").play();
    //document.getElementById("cricekt").volume = .5;
    document.getElementById("cricket").play();
    //document.getElementById("flood").volume = .5;
    document.getElementById("flood").play();
    //document.getElementById("birds").volume = .5;
    document.getElementById("birds").play();
    //document.getElementById("fire").volume = .5;
    document.getElementById("fire").play();
    //document.getElementById("wave").volume = .5;
    document.getElementById("wave").play();
    //document.getElementById("leaves").volume = .5;
    document.getElementById("leaves").play();
}

function setVolumeRain() {
    document.getElementById("rain").volume = document.getElementById("rainV").value;

}

function setVolumeStorm() {
    document.getElementById("storm").volume = document.getElementById("thunderV").value;

}

function setVolumeWind() {
    document.getElementById("wind").volume = document.getElementById("windV").value;

}

function setVolumeCricket() {
    document.getElementById("cricket").volume = document.getElementById("cricketV").value;

}

function setVolumeFlood() {
    document.getElementById("flood").volume = document.getElementById("stormV").value;

}

function setVolumeBirds() {
    document.getElementById("birds").volume = document.getElementById("birdV").value;

}

function setVolumeFire() {
    document.getElementById("fire").volume = document.getElementById("fireV").value;

}

function setVolumeWave() {
    document.getElementById("wave").volume = document.getElementById("wavesV").value;

}

function setVolumeLeaves() {
    document.getElementById("leaves").volume = document.getElementById("leavesV").value;

}


function stopAudio() {
    document.getElementById("rain").pause();
    document.getElementById("storm").pause();
    document.getElementById("wind").pause();
    document.getElementById("cricket").pause();
    document.getElementById("flood").pause();
    document.getElementById("birds").pause();
    document.getElementById("fire").pause();
    document.getElementById("wave").pause();
    document.getElementById("leaves").pause();
}



function mainControlfunction() {
    if (play === false) {
        play = true;
        document.getElementById("controler").style.background = "url(play.png) no-repeat";
        stopAudio();
    } else if (play === true) {
        play = false;
        document.getElementById("controler").style.background = "url(pause.png) no-repeat";
        initAudio();
    }
}