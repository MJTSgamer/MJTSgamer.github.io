//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Miniproject",
        cardImage: "assets/images/projecten-page/healthappy1.jpg",
    desp: "<li><b>Doel</b></br> Het maken, bedenk en uitvoeren van een zelf bedacht project.</li> <li><b>Opdracht gever</b></br> Dat waren wij zelf en niemand anders.</b>",
  },
  {
    title: "Wist je dat",
    cardImage: "assets/images/projecten-page/healthappy2.jpg",
    desp: "<li>Er elk uur 1 miljard cellen in het lichaam worden vervangen?<br><li>Je meer kunt eten van gezonde voeding zonder aan te komen?<br><li>Dat koffie ook heel veel gezondheidsvoordelen heeft?<br><li>Je van groene thee af kunt vallen?<br><li>Stress de grootste oorzaak is van ziekte?<br><li>Dat optimisten een lagere kans op een hartaanval hebben?",
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
      "Ik Heb de website gemaakt.",
  },
  {
    title: "Tristan Damsma",
      cardImage: "assets/images/projecten-page/dp_male.jpg",
    description:
      "Heeft het werkboekje bij gehouden.",
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
