const input = document.getElementById("search");
const toggle = document.getElementById("toggleDark");
const body = document.getElementById("body");

async function getData(continent) {
  console.log(continent);
  const url = `https://restcountries.com/v3.1${
    continent
      ? `/region/${continent}`
      : input.value
      ? `/name/${input.value}`
      : "/all"
  }`;

  const response = await fetch(url);
  const data = await response.json();
  const countryContainer = document.getElementById("country-container");

  console.log(data);
  countryContainer.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const imgContainer = document.createElement("div");
    const textContainer = document.createElement("div");
    div.className = "countryInfo";
    imgContainer.className = "img-container";
    textContainer.className = "text-container";
    const countryName = document.createElement("h2");
    const population = document.createElement("p");
    const region = document.createElement("p");
    const capitalCity = document.createElement("p");

    countryContainer.appendChild(div);
    imgContainer.appendChild(img);
    textContainer.appendChild(countryName);
    textContainer.appendChild(population);
    textContainer.appendChild(region);
    textContainer.appendChild(capitalCity);
    div.appendChild(imgContainer);
    div.appendChild(textContainer);
    // div.appendChild(countryName);
    // div.appendChild(population);
    // div.appendChild(region);
    // div.appendChild(capitalCity);

    img.src = data[i].flags.png;
    countryName.innerText = data[i].name.common;
    population.innerHTML = `<span style="color: #000; font-weight: 900">Population:</span> ${data[i].population}`;
    region.innerHTML = `<span style="color: #000; font-weight: 900">Region:</span> ${data[i].region}`;
    capitalCity.innerHTML = `<span style="color: #000; font-weight: 900">Capital city</span>: ${data[i].capital}`;
  }
  toggle.addEventListener("click", function () {
    this.classList.toggle("bi-moon");
    if (this.classList.toggle("bi-brightness-high-fill")) {
      body.style.background = "white";
      body.style.color = "black";
      body.style.transition = "2s";
    } else {
      body.style.background = "black";
      body.style.color = "white";
      body.style.transition = "2s";
    }
  });
}

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const select = document.querySelector(".select");
  const caret = document.querySelector(".caret");
  const menu = document.querySelector(".menu");
  const options = document.querySelectorAll(".menu li");
  const selected = document.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

getData();

input.addEventListener("keydown", () => {
  getData();
});
// input.addEventListener("keydown", getData);
