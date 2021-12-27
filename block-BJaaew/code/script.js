let root = document.querySelector(".cards");
let rootTags = document.querySelector(".tags");
let search = document.querySelector(".search");

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

let allTags = got.houses.map((house) => house.name);

let activeHouse = "";

function createCards(data = []) {
  root.innerHTML = "";
  data.forEach((people) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.alt = people.name;
    img.src = people.image;
    let h3 = document.createElement("h3");
    h3.innerText = people.name;
    let p = document.createElement("p");
    p.innerText = people.description;
    let button = document.createElement("button");
    button.innerText = "Know More!";
    li.append(img, h3, p, button);

    root.append(li);
  });
}

function createTagsUI(tags = []) {
  rootTags.innerText = "";
  tags.forEach((tag) => {
    let li = document.createElement("li");
    li.innerText = tag;

    li.addEventListener("click", () => {
      activeHouse = tag;
      let peopleOfTheHouse = got.houses.find((house) => house.name == tag);
      console.log(peopleOfTheHouse);
    });

    rootTags.append(li);
  });
}

function handleSearch(event) {
  let searchText = event.target.value;
  let filteredPeople = allPeople.filter((person) =>
    person.name.toLowerCase().includes(searchText.toLowerCase())
  );
  createCards(filteredPeople);
}

search.addEventListener("input", handleSearch);
createTagsUI(allTags);
createCards(allPeople);
