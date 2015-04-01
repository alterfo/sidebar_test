### jshint devel:true ###
'use strict'

$ '.sidebar__icon'
	.click () ->
		$('.sidebar__icon--show').toggle()
		$('.sidebar__icon--close').toggle()
		$('.sidebar').toggleClass('show')