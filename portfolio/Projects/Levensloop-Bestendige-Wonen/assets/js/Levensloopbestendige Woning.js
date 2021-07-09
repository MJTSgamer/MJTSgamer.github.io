//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Domino-Day",
        cardImage: "assets/images/projecten-page/leven1.jpg",
    time: " ",
    desp: "<li><b>Doel</b></br> Het doel was om een onderdeel van/of huis/flat ter make wat een huis levensloop bestendig maakt</li> <li><b>Opdracht gever</b></br>de opdracght gever was [] we moesten een deel van/of een huis/flat maken zodat het levensloop bestendig wordt hierbij hebben we voor een verstelbare kast gekozen en voor een campus</li>",
  },
  {
    title: "de campus",
      cardImage: "assets/images/projecten-page/leven2.jpg",
    time: " ",
      desp: "<li>De campus is onntworpen om alles wat iemand nodig heeft in de buurt te hebben dat is makkeliojk omdat je als ouder persoon niet heel goed te been bent (meestal). daarom hebben we hier voor gekozen. ook kunnen er omdat er in het midde een open tuins is knutzel dagen en/of sport activiteiten gehouden worden.",
    },
    {
        title: "de kast",
        cardImage: "assets/images/projecten-page/leven3.jpg",
        time: " ",
        desp: "<li>Dit is de verstelbare kast voor het levensloop bestendige campus de kast is ontworpen om naar benede gehaald te kunnen worden met behulp van een touwtje zodat als een ouder persoon in een rolstoel zit niet op hoeven te staan.",
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
      "Ik heb de verstelbare kast gemaakt met nail en levin",
  },
  {
    title: "Chiel Bos",
      cardImage: "assets/images/projecten-page/dp_male.jpg",
    description:
      "Heeft met levin en nail de campus gemaakt",
  },
  {
    title: "Nail Souissi",
      cardImage: "assets/images/projecten-page/dp_male.jpg",
    description:
      "heeft met mij en de kast gemaakt en met chiel de campus",
  },
  {
    title: "Levin de Groot",
      cardImage: "assets/images/projecten-page/dp_male.jpg",
    description:
      "heeft  vast ook wel iets gedaan",
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
