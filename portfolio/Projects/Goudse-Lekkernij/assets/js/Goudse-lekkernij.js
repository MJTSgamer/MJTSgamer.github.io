//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Miniproject",
        cardImage: "assets/images/projecten-page/bakken1.jpg",
        desp: "<li><b>Doel</b></br> Het maken van een biologisch product wat te maken heeft met gouda (kaas, stroopwafels, etc.)</li> <li><b>Opdracht gever</b></br>De opdracht gever was bakkerij de vlaam zij heeft de opdracht gegeven om een biologisch gouds product te maken en te verbetern totdat je het <b>perfecte</b> goudse biologische product hebt.</b><br><li>Hier links kan je het stroop koekjes deeg zien",
  },
  {
    title: "stroop?",
      cardImage: "assets/images/projecten-page/bakken3.jpg",
    desp: "<li>dit was de overheerlijk stroop",
    },
    {
        title: "KOEKJES!",
        cardImage: "assets/images/projecten-page/bakken2.jpg",
        desp: "<li>dit was het eindprodcut. een volledige biologische gouds</br> product. het project - ondanks dat het raar gepland was - was erg leuk om te maken"
    }
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
      "Dit was een project wat je in je eentje moest maken dus ik heb alles gemaakt :)",
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
