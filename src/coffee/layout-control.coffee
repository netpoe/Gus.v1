'use-strict'
$(document).ready ->

	$contentDisplayWrapper = $('.content-items-display-wrapper')
	$contentItemsWrapper = $('.content-items-wrapper')
	$globalIdRef = ''

	$('.content-item').click((e)->
		e.preventDefault()
		$(this).addClass('active')
		idRef = $(this).attr('href')
		console.log $globalIdRef
		if $contentDisplayWrapper.hasClass 'display-content'
			$contentDisplayWrapper.removeClass($globalIdRef)
			$('.content-items-wrapper [href=#' + $globalIdRef + ']').removeClass('active')
			$globalIdRef = idRef.slice(1)
			$contentDisplayWrapper.addClass($globalIdRef)
		else
			$globalIdRef = idRef.slice(1)
			$contentDisplayWrapper.addClass($globalIdRef)
			$contentDisplayWrapper.addClass('display-content')
			$contentItemsWrapper.addClass('displaying-content')
		return
		)

	$('.content-display-close').on('click', 'a', (e)->
		e.preventDefault()
		$('.content-item').removeClass('active')
		$contentDisplayWrapper.removeClass('display-content')
		$contentItemsWrapper.removeClass('displaying-content')
		$contentDisplayWrapper.removeClass($globalIdRef)
		return
		)
	
	# TRANSFORM ICONS INITIALIZE
	# transformicons.add('.tcon')

	return # END ON READY