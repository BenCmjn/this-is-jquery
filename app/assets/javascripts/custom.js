$(document).ready(function() {
    console.log("Bonjour JQUERY");
    /*
    si il y a un click sur un des "li" enfant de ce qui a l'id "tabs"
	On va déclencher la fonction suivante  :
	/*1*
	On stocke dans une variable "tab_id" une fonction Jquery
	qui donne à ce "li" un attribut "data-tab"
	/*2* 
	On enlève la classe 'current' (avec un display dedans)
	à celui qui en avait un, et on ajoute cette classe 'current'
	à l'élément cliqué.
	/*3*
	On enlève la classe 'current' (avec un display dedans)
	à celui qui en avait un, et on ajoute cette classe 'current'
	à l'élément cliqué.
	*/
    $('#tabs li').click(function() {

   /*1*/var tab_id = $(this).attr('data-tab');

   /*2*/$('#tabs li').removeClass('current');
        $(this).addClass('current');

   /*3*/$('.tab-content').removeClass('current');
        $("#" + tab_id).addClass('current');
    })

})