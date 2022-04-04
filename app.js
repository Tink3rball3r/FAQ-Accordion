// traversing the dom method
/*
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		const question = e.currentTarget.parentElement.parentElement;
		question.classList.toggle('show-text');
	});
});
*/

//using selectors inside the element

const questions = document.querySelectorAll('.question');
// loop through questions
// question is used to differentiate between opened and closed
questions.forEach(function (question) {
	// select the button within each question
	const btn = question.querySelector('.question-btn');
	// listen for which button is clicked
	btn.addEventListener('click', function () {
		// loop through  questions
		// item is used as a parameter to differentiate between closed and open
		questions.forEach(function (item) {
			// close question when another is clicked
			if (item !== question) {
				item.classList.remove('show-text');
			}
		});
		// open question
		question.classList.toggle('show-text');
	});
});
