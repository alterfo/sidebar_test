// Generated by CoffeeScript 1.9.0

/* jshint devel:true */
'use strict';
$('.sidebar__icon').click(function() {
  $('.sidebar__icon--show').toggle();
  $('.sidebar__icon--close').toggle();
  return $('.sidebar').toggleClass('show');
});
