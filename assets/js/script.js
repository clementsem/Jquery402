$(document).ready( function() {

  $('#mean').click(function(){
// calcul de la moyenne : parseInt transforme les valeures en nombre pour le calcul de la moyenne
    var firstGrade = parseInt($('#firstGrade').val());
    var secondGrade = parseInt($('#secondGrade').val());
    var thirdGrade = parseInt($('#thirdGrade').val());
    var fourthGrade = parseInt($('#fourthGrade').val());
    var fifthGrade = parseInt($('#fifthGrade').val());
    var mean = (firstGrade + secondGrade + thirdGrade + fourthGrade + fifthGrade)/5;
// affiche l'appréciation
    if ( mean >= 0 && mean < 10) {
      $('#appreciation').text('Appréciation : NUL');
    }
    if ( mean >= 10 && mean < 13) {
      $('#appreciation').text('Appréciation : BOF');
    }
    if ( mean >= 13 && mean < 16) {
      $('#appreciation').text('Appréciation : TRES MOYEN');
    }
    if ( mean >= 16 && mean < 20) {
      $('#appreciation').text('Appréciation : MOYEN');
    }
    if ( mean == 20) {
      $('#appreciation').text('Appréciation : CORRECT');
    }
// affiche la moyenne
    $('#displayMean').text('Moyenne : ' + mean);
  });
});
