document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-lang-en]');
    const quizOptions = document.querySelectorAll('.quiz-option');
    const submitQuizButton = document.getElementById('submit-quiz');
    const quizResult = document.getElementById('quiz-result');
    const quizScore = document.getElementById('quiz-score');
    const quizMessage = document.getElementById('quiz-message');

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '🌞';
    });

    languageToggle.addEventListener('click', function() {
        const currentLanguage = languageToggle.textContent;
        const newLanguage = currentLanguage === 'EN' ? 'RU' : 'EN';
        languageToggle.textContent = newLanguage;
        elementsToTranslate.forEach(element => {
            element.textContent = element.getAttribute(`data-lang-${newLanguage.toLowerCase()}`);
        });
    });

    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            const question = this.closest('.quiz-question');
            question.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    submitQuizButton.addEventListener('click', function() {
        let correctAnswers = 0;
        quizOptions.forEach(option => {
            if (option.classList.contains('selected') && option.getAttribute('data-answer') === 'correct') {
                correctAnswers++;
            }
        });

        const totalQuestions = document.querySelectorAll('.quiz-question').length;
        quizScore.textContent = `${correctAnswers} / ${totalQuestions}`;
        quizMessage.textContent = correctAnswers === totalQuestions ? 'Congratulations! You won!' : 'Try again to get all answers correct.';
        quizResult.style.display = 'block';
    });
});

$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = 0;

    $(window).on("scroll", function() {
            
        scrollOffset = $(this).scrollTop();

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    });


    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });



    /* collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $(blockId).slideToggle();
    });


    $("[data-slider]").slick({
        infinite: true, 
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });



});

window.onload = function() {
    var audio = document.getElementById('background-audio');
    audio.play();
};