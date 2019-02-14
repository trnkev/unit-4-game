var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber = Math.floor(Math.random()*100 + 25);
var numberOptions = [10, 5, 3, 7];
var imageOptions = ['gems','diamond','crystal','crystals'];

$('#number-to-guess').text(targetNumber);

for (var i = 0; i < numberOptions.length; i++) {
    var crystalImage = $('<img>');
    crystalImage.addClass('crystal-image');
    crystalImage.attr('src', 'assets/images/' + imageOptions[i] +'.svg');
    crystalImage.attr('data-value', numberOptions[i]);
    $('#crystal').append(crystalImage);
}
