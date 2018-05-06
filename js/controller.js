$(document).ready(function () {
  $('#speak').click(function () {
    speechSynthesis.speak(
      new SpeechSynthesisUtterance($('#speak-text').val())
    );
  });
});
