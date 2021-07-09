//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
    {
        title: "Domino-Day",
        cardImage: "assets/images/dominobaan.jpg",
        time: " ",
        desp: "<li><b>Doel</b></br> Het doel is het klaar hebben van een deelconstructie voor je team als we straks weer naar school mogen.</li> <li><b>Opdracht gever</b></br> Wij hebben van meneer Nijkamp de opdracht gekregen om technische constructies voor domino banen te maken. Wat wij moesten doen was een constructie maken die de beweging van een rij domino stenen doorgeeft aan een andere rij dominostenen, met daartussen ‘obstakels’ of iets anders zoals een treintje.</li>",
    },
    {
        title: "zwaartekracht",
        cardImage: "assets/images/gravity.jpg",
        time: " ",
        desp: "<li>De aantrekkingskracht die bij de aarde, de maan en de zon worden ingezet,</br> wordt zwaartekracht genoemd. Zwaartekracht is dus de aantrekkende kracht van twee voorwerpen</br> met massa's die energie op elkaar uitoefenen. Onze aarde is één grote magneet, de zwaartekracht zorgt ervoor dat alles naar de aarde valt. De man op de afbeelding is meneer newton. Hij ontdekte de zwaartekracht door dat een appel op zijn hoofd viel.",
    },
    {
        title: "Leuk weetje",
        cardImage: "assets/images/dominoday.jpg",
        time: " ",
        desp: "<li>Is een jaarlijks evenement  rond een wereldrecordpoging voor het grootste </br>aantal vallende dominostenen opgezet door 1 groep mensen.</br> Het vond van 1998 tot en met 2009 jaarlijks plaats in november,</br> in 2020 keert het programma na elf jaar terug. De organisatie en productie</br> is in handen van Endemol. Het huidige record staat op 4.491.863</br> dominostenen. Het werd gevestigd op 13 november 2009 onder </br>leiding van Robin Paul Weijers.",
    },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Matt ter Steege",
    cardImage: "assets/images/dp_male.jpg",
    description:
      "Ik heb het grootste deeel van de constructie bedacht",
  },
  {
    title: "Nynke Boeijinga",
      cardImage: "assets/images/dp_female.jpg",
    description:
      "Heeft geholpen met het bouwen van de constructie en heeft heel veel dingen uitgetekend",
  },
  {
    title: "Wanika Kroon",
      cardImage: "assets/images/dp_female.jpg",
    description:
      "Heeft niet veel gedaan anders dan filmpjes van katten bekeken",
  },
  {
    title: "Guus den Hartog",
      cardImage: "assets/images/dp_male.jpg",
    description:
      "is naar een andere school gegaan dus heeft ook niet veel gedaan",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
