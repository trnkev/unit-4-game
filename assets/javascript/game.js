var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber = 0;
var imageOptions = ['#gems', '#diamond', '#crystal', '#crystals'];

function generateGems() {
    for (let id of imageOptions) {
        var random = Math.floor(Math.random() * 12 + 1);
        var crystalImage = $(id);
        crystalImage.attr('data-value', random);
    }
}

function reset() {
    var random = Math.floor(Math.random() * 101 + 19);
    targetNumber = random;
    counter = 0;
    $('#score').html(0);
    generateGems();
}

reset();

$('.crystal-image').on('click', function () {
    var crystalValue = $(this).attr('data-value');
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $('#score').html(counter);

    if (counter === targetNumber) {
        alert('You win!');
        ++wins;
        $('#wins').html(wins);
        reset();
    } else if (counter > targetNumber) {
        alert('Sorry, you lost!');
        ++losses;
        $('#losses').html(losses);
        reset();
    }
    $('#number-to-guess').text(targetNumber);

});

