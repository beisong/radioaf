Template.sg933.onRendered(function () {
    play(document.getElementById("player"));

});

Template.sg933.events({
    'click #play_button': function (event) {
        event.preventDefault();
        togglePlayPause(document.getElementById("player"));

    },
    'click #stop_button': function (event) {
        event.preventDefault();
        console.log("stopping");
        stop(document.getElementById("player"));
    }
});

function togglePlayPause(element) {
    if (element.paused) {
        element.play();
        $("#play_button").html("Pause");
    }
    else {
        element.pause();
        $("#play_button").html("Play");
    }
}

function play(element) {
    if (element.paused) {
        element.play();
        $("#play_button").html("Pause");
    }
}

function stop(element) {
    element.src = "";
    element.src = document.getElementsByName('audiosrc')[0].getAttribute('content');
    element.preload = "none";
    $("#play_button").html("Play");
}