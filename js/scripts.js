$(document).ready(function() {
    const height = parseInt(prompt("How tall are you in inches?"));

    if (height >= 72) {
        $('#tootall').show(); 
        $('#tallrides').show();
    }   else if (height >= 58) {
        $('#justright').show();
        $('#shortrides').show();
        $('tallrides').show();
    }   else {
        $('#tooshort').show();
        $('#shortrides').show();
    }
});