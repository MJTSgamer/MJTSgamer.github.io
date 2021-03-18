//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Create The Escape",
    cardImage: "assets/images/projecten-page/Escaperoom1.jpg",
    desp: "<li><b>Doel</b></br> Het maken van een Escaperoom puzzle voor Escaperoom in Gouda.</li> <li><b>Opdracht gever</b></br> Escaperoom in Gouda heeft ons de opdracht gegeven om een deel van een escaperoom te ontwikkelen, dat hebben wij gedaan met een het leuk en robuust design.",
  },
  {
    title: "Leuk weetje",
    cardImage: "assets/images/projecten-page/Escaperoom2.jpg",
    desp: "<li>Escaperooms vinden hun oorsprong in computergames. Rond de laatste millenniumwisseling verschenen er namelijk diverse computerspelletjes waarin een ontsnappingskamer centraal stond. Spelers moesten hierbij uit kamers zien te ontsnappen door mysteries op te lossen, met behulp van de voorwerpen in de ruimte. Deze spellen kwamen als ‘Escape Games’ of ‘Escaperooms’ bekend te staan.",
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
      "ik heb de bedrading en code van de arduino gemaakt.",
  },
  {
    title: "Milan van Ast",
      cardImage: "assets/images/projecten-page/dp_male.jpg",
    description:
      "Heeft het team geleid en heeft het eindresultaat <b>nog</b> mooier gemaakt",
  },
  {
    title: "Axel Kruijt",
      cardImage: "assets/images/projecten-page/dp_male.jpg",
    description:
      "Heeft de constructie van de puzzel gemaakt",
  },
  {
    title: "Yoran Meijeren",
      cardImage: "assets/images/projecten-page/dp_male.jpg",
    description:
      "Heeft Axel geholpen met het maken van de constructie van de puzzel",
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
