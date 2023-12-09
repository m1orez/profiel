const stages = [
    {
        imgName: "../img/ROX.jpeg",
        name: "ROX | digital agency",
        info: "ROX is een bedrijf dat websites maakt voor grote bedrijven zoals onder andere voor de Rijksoverheid. Ze zijn gevestigd in het centrum van Rotterdam. <br> Bij ROX begint de werkdag om 9 uur en eindigt om 5. <br>Een van de vereisten om bij ROX stage te lopen is om React.js te kennen en hoewel ik hier nog niet heel goed in ben hoop ik er beter in te worden en meer te leren hierover op stage.",
        websiteURL: "https://vacatures.rox.nl/stage-webdevelopment?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
    },
    {
        imgName: "../img/Just.jpeg",
        name: "just",
        info: "Just is ook een bedrijf die websites levert aan klanten. <br> Bij Just begint ook de werkdag om 9 en eindigt om 5 <br> Bij just mag je zelf laten weten wat je zou willen leren op stage en dus zijn er geen bepaalde eisen die worden genoemd in de stagevacature",
        websiteURL: "https://nl.indeed.com/jobs?q=front+end+developer+stage&l=gemeente+rotterdam&vjk=f85ce0caf3ab72d2&from=smart-apply"
    },
    {
        imgName: "../img/Eye-C.jpeg",
        name: "Eye-C",
        info: "Eye-C is een internetbureau die websites maakt en levert aan klanten, hun belangrijkste doel is bedrijven te ondersteunen en adviseren. Ze zijn gevestigd in Rijswijk. <br> bij Eye-c begint de werkdag om 9 en eindigt om 5. <br> Bij eye-c zou ik mijn vaardigheden met html/css en javascript verder kunnen ontwikkelen.",
        websiteURL: "https://eye-c.nl/vacatures/junior-stagiair-front-end-developer/"
    }
]

function cardSwitch(index) {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("activeButton");
    }
    var clickedButton = document.getElementById("stage" + (index + 1));
    clickedButton.classList.add("activeButton");

    document.getElementById("stageImg").src = stages[index].imgName;
    document.getElementById("stageHeader").innerHTML = stages[index].name;
    document.getElementById("stageDescription").innerHTML = stages[index].info;
    document.getElementById("stageVacature").href = stages[index].websiteURL;
}