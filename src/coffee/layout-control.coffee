'use-strict'
$(document).ready ->
	# DISABLE ANCHORS
	$('.disable-anchors a').click (e)->
		e.preventDefault()
		return

	$('[data-href]').click((e)->
		console.log($(this).data('href'))
		document.location.replace($(this).data('href'))
		return
		)

	return # END ON READY