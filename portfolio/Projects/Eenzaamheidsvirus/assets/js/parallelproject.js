//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
    {
        title: "Eenzaamheids Virus",
        cardImage: "assets/images/projecten-page/Parallel1.jpg",
        time: " ",
        desp: "<li><b>Doel</b></br> Het idee was om een game te maken die de ouderen tijdens corona bezig zouden houden en zich niet eenzaam voelen.</li>",
    },
    {
        title: "opdrachtgever",
        cardImage: "assets/images/projecten-page/Parallel2.jpg",
        time: " ",
        desp: "<li><b>Opdracht gever</b></br>Minister Mark Rutte heeft de volgende opdracht voor jullie: Bestrijd het </br>eenzaamheid-virus met in het oog de huidige maatregelen. Maak met de kennis</br> die je opdoet over het maken van een app, een spel/idee/bordspel/teamspel</br> om het eenzaamheid-virus tegen te gaan. Bijvoorbeeld oude mensen. <br> ‘Let een beetje op elkaar, ik reken op u’ – Mark Rutte",
    },
    {
        title: "Leuk weetje",
        cardImage: "assets/images/projecten-page/Parallel3.jpg",
        time: " ",
        desp: "<li>platformers (vaak platformers of jump 'n' run genoemd) is een videogamegenre.Platformspelers worden gekenmerkt door hun intensieve gebruik van springen)",
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
    cardImage: "assets/images/projecten-page/dp_male.jpg",
    description:
      "Ik deed het codeer werk van dit spel.",
  },
  {
    title: "Joris Booij",
      cardImage: "assets/images/projecten-page/dp_male.jpg",
    description:
      "Het testen van het spel en kijken voor verbeteringen.",
  },
  {
    title: "Joep Sorel",
      cardImage: "assets/images/projecten-page/dp_male.jpg",
    description:
      "Het verfijnen van het spel op het gebied van samenhang en moelijkheid.",
  },
  {
    title: "Sam Timmers",
      cardImage: "assets/images/projecten-page/dp_male.jpg",
    description:
      "Art en design van het spel.",
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
