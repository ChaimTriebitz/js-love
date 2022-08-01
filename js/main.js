'use strict'

var gIsMark = false
var gIsBless = false

function init() {
	setTimeout(changeTittle, 3000)
}

function changeTittle() {
	var elTittle = document.querySelector('h1')
	elTittle.innerText = 'I Love JS'
}

function mark(elBtn) {
	var elSpans = document.querySelectorAll('.box span')
	for (var i = 0; i < elSpans.length; i++) {
		var elSpan = elSpans[i]
		elSpan.classList.toggle('mark')
	}
	gIsMark = !gIsMark
	elBtn.innerText = gIsMark ? 'Unmark' : 'Mark'
}

function whenMouseOnImg(elImg) {
	elImg.src = 'img/ca.png'
}

function whenMouseOutImg(elImg) {
	elImg.src = 'img/ninja.png'
}

function changeSubHeader(elSpan) {
	if (!gIsMark) return
	var elH2Span = document.querySelector('h2 span')
	elH2Span.innerText = elSpan.innerText
}

function imgClicked() {
	bless()
}

function handleKey(ev) {
	if (ev.key === 'Escape') closeModal()
}

function openModal(elSpan) {
	var elModal = document.querySelector('.modal')
	elModal.style.display = 'block'
	setTimeout(closeModal, 5000)
	elSpan.style.color = getRandomColor()
	gIsBless = true
}

function closeModal() {
	var elModal = document.querySelector('.modal')
	elModal.style.display = 'none'
	gIsBless = false
}

function bless() {
	if (gIsBless) return
	var elSpan = document.querySelector('.modal h2')
	elSpan.innerText = 'You were blessed at ' + getTime()
	openModal(elSpan)
}

function getTime() {
	return new Date().toString().split(' ')[4]
}

function getRandomColor() {
	var letters = '0123456789ABCDEF'
	var color = '#'
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}
