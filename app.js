// local data
const people = [
    {
      id: 1,
      name: "pengu",
      job: "11/10 <3",
      img:
        "https://cdn.lolchess.gg/images/tft/companions/tooltip_penguknight_classic_tier2.png",
      text:
        " Pengu are an avian species. These aquatic flightless birds are mostly seen around the tundra region. Highly adapted for life in the water, pengus have countershaded dark and white plumage, and their wings have evolved into flippers. ",
    },
    {
      id: 2,
      name: "darkin abyssia",
      job: "Cute Aatrox",
      img:
        "https://cdn.lolchess.gg/images/tft/companions/tooltip_dsswordguy_darkin_tier3.littlelegends_darkstar.png",
      text:
        "Abyssia wields a sword imbued with the power to open rifts between space and time. No one knows what Abyssia looks like, as its true form remains forever hidden beneath its mask."
    },
    {
      id: 3,
      name: "Precious Panda Choncc",
      job: "THICC",
      img:
        "https://cdn.lolchess.gg/images/tft/companions/tooltip_choncc_preciouspanda_tier1.littlelegends_10_19.png",
      text:
        "As a whelpling, Choncc is eternally hungry and perpetually sleepy. While favored for their mellow nature, Choncc can be roused to ferocious power if provoked—or cajoled into action with the right snacks."
    },
    {
      id: 4,
      name: "Golden Fenroar",
      job: "Doge Coin Mascot Cosplay",
      img:
        "https://cdn.lolchess.gg/images/tft/companions/tooltip_fenroar_base_variant2_tier3.littlelegends_11_9.png",
      text:
        "So, you want the ghost wolf, Fenroar, to join your party. Fenroar are fiercely loyal warriors. But don't let the sword intimidate you. They become eternally bound to their Puproar as well as their friends, which they make quite easily after a round or two of fetch the orbs.",
    },
  ];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// start current at the first person
let current = 0;

// load 1st item

window.addEventListener('DOMContentLoaded', function(){
  showPerson(current);
});

// display person based on the current
function showPerson(person){
  const item = people[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// next button
nextBtn.addEventListener('click', function(){
  if(current == people.length-1)
    current = 0;
  else
    current++;
  showPerson(current);
});

// prev button
prevBtn.addEventListener('click', function(){
  if((current) == 0)
    current = people.length - 1;
  else
    current--;
  showPerson(current);
});

// random number
randomBtn.addEventListener('click', function(){
  do{
    var x = Math.floor(Math.random()*(people.length));
  } while(x == current)

  current = x;
  showPerson(current);
});
