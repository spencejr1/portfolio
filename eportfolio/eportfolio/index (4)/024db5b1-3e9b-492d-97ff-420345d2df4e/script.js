$(document).ready(function() {
    // Rätt svar för varje fråga
    let correctAnswers = ["1993", "Cascading Style Sheets", "JavaScript"];
    let score = 0;

    // När en svarsknapp klickas
    $(".answer").click(function() {
        let userAnswer = $(this).text();
        let questionIndex = $(this).parent().index();

        if (userAnswer === correctAnswers[questionIndex]) {
            $("#feedback").text("Rätt svar!").css("color", "green");
            score++;
        } else {
            $("#feedback").text("Fel svar!").css("color", "red");
        }

        // Stäng av knapparna efter svar
        $(this).siblings().prop("disabled", true);
        $(this).prop("disabled", true);
    });

    // Omstart-knapp
    $("#restart").click(function() {
        score = 0;
        $("#feedback").text("");
        $(".answer").prop("disabled", false);
    });
});