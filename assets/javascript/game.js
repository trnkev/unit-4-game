var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber = Math.floor(Math.random()*100 + 25);
var numberOptions = [10, 5, 3, 7];

$('#number-to-guess').text(targetNumber);

for (let picture of numberOptions) {
    var crystalImage = $('<img>');
    crystalImage.addClass('crystal-image');
    crystalImage.attr('src', 'assets/images/crystal.svg');
    $('#crystal').append(crystalImage);
}