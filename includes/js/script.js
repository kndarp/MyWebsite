/*

My Custom JS
============

Author:  Kndarp Patel
Updated: April 2016
Notes:	 Hand coded for Self Learning

*/

$(function(){

    $('#alertMe').click(function(e){
        e.preventDefault();
        $('#successAlert').slideDown();
    });

    $('a.pop').click(function(e){
      e.preventDefault();
    });

    $('a.pop').popover();

    $('[rel="tooltip"]').tooltip();
})
