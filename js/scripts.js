$(document).ready(function() {
    const height = parseInt(prompt("How tall are you in inches?"));

    if (height >= 72) {
        $('#tootall').show();
    }   else if (height >= 58) {
        $('#allrides').show();
    }   else {
        $('#tooshort').show();
    }
});