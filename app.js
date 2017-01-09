$(document).ready(function() {
//JavaScript
function wordCount(text){
	var splitWord = text.split(" ");
	var array = [];
	for (var i = 0; i < splitWord.length; i++) {
		array.push(splitWord[i]);
	}
	return array.length;
}


function uniqueWord(text) {
	var count = [];
	for (var i = 0; i <= text.length; i++) {
		if (count.indexOf(text[i]) === -1) {
			count.push(text[i]);
		}
	}
	return count.length;
}

function averageWordLength (text){
  var totalLength = text.join("").length;
  return (totalLength / text.length).toFixed(2);
}

//jQuery

function reportText(text) {

	var textReport = $('.js-text-report');

	//Function Results
	var totalWordCount = wordCount(text);
	var uniqueWordCount = uniqueWord(text);
	var avgWordLength = averageWordLength(text);

	textReport.find('.js-word-count').text(totalWordCount);
	textReport.find('.js-unique-word-count').text(uniqueWordCount);
	textReport.find('.js-average-word-length').text(avgWordLength);
	textReport.removeClass('hidden');
}

	$('.js-text-form').on('submit', function(event){
		event.preventDefault();
		var userInput = $(this).find('#user-text').val();
		reportText(userInput);
	});

});