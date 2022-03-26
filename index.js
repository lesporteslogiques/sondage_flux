
Survey
    .StylesManager
    .applyTheme("modern");

// Charger le modèle de sondage en JSON ********************************
const survey = new Survey.Model(surveyJson);
survey.locale = 'fr';

// Champs complémentaires pour le sondage

var q1 = survey.getQuestionByName('ville');
q1.hasOther = "autre";
var q2 = survey.getQuestionByName('quimper-quartier');
q2.hasOther = "autre";
var q3 = survey.getQuestionByName('motif-installation');
q3.hasOther = "autre";
var q4 = survey.getQuestionByName('autre-region');
q4.otherText = "oui (précisez)";
q4.hasOther = "oui";
var q5 = survey.getQuestionByName('composition-foyer');
q5.hasOther = "autre";
var q6 = survey.getQuestionByName('zone-de-vie');
q6.hasOther = "autre";

var q7 = survey.getQuestionByName('situation-actuelle');
q7.hasOther = "autre";
var q8 = survey.getQuestionByName('metier-anterieur');
q8.otherText = "non (précisez)";
q8.hasOther = "non";
var q9 = survey.getQuestionByName('lieu-activite');
q9.hasOther = "autre";
var q10 = survey.getQuestionByName('situation-lieu-activite');
q10.hasOther = "autre";
var q11 = survey.getQuestionByName('autre-lieu-activite-non');
q11.hasOther = "autre";
var q12 = survey.getQuestionByName('autre-lieu-activite-critere');
q12.hasOther = "autre";

var q13 = survey.getQuestionByName('pratique-sportive-raison-absence');
q13.hasOther = "autre";
var q14 = survey.getQuestionByName('pratique-artistique-raison-absence');
q14.hasOther = "autre";

var q15 = survey.getQuestionByName('sortie-restauration-limite');
q15.hasOther = "autre";
var q16 = survey.getQuestionByName('activite-autre');
q16.hasOther = "autre";

var q17 = survey.getQuestionByName('smartphone-usage');
q17.hasOther = "autre";1
var q18 = survey.getQuestionByName('smartphone-absence');
q18.hasOther = "autre";
var q19 = survey.getQuestionByName('ordinateur-usage');
q19.hasOther = "autre";
var q20 = survey.getQuestionByName('ordinateur-absence');
q20.hasOther = "autre";
var q21 = survey.getQuestionByName('fablab');
q21.hasOther = "autre";

var q22 = survey.getQuestionByName('benevolat');
q22.hasOther = "autre";

var q23 = survey.getQuestionByName('participation-creation');
q23.hasOther = "autre";

// Mesure du temps passé sur le sondage ********************************
startTime = undefined;
endTime = undefined;

survey.onValueChanged.add(function () {
    if(startTime == undefined) {
        startTime = Date.now();
    }
});

// Pour générer un morceau de l'ID unique ******************************
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Envoi du résultat au serveur pour la sauvegarde *********************
function sendJSON(data) {
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let result = document.querySelector('#surveySaveResult');
    let url = "submit.php";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("xhr.response : " + xhr.response);
            } else {
                console.log("xhr.status != 200 : " + xhr.status);
            }
        }
    };

    // Sending data with the request
    xhr.send(data);
}

// Evènement à déclencher quand le sondage est validé *********************
survey
    .onComplete
    .add(function (sender) {

        // Ajouter les données de temps et d'ID au résultat
        endTime = Date.now();
        grop = sender.data;
        grop["unique_file_id"] = String(startTime) + "_" + String(getRndInteger(1, 1000));
        grop["time_spent_on_survey"] = Math.round( (endTime - startTime) / 1000);

        // Afficher les résultats sur la console
        console.log(JSON.stringify(grop, null, 3));

        // Requ^ete vers le serveur pour sauvegarde
        sendJSON(JSON.stringify(grop, null, 3));
    });

// Afficher le sondage quand tous les fichiers sont chargés ***************
document.addEventListener("DOMContentLoaded", function() {
    survey.render("surveyContainer");
});
