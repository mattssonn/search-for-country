async function getData() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  const countryContainer = document.getElementById("country-container");

  console.log(data);

  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("section");
    const img = document.createElement("img");
    const countryName = document.createElement("h4");
    const population = document.createElement("p");
    const region = document.createElement("p");
    const capitalCity = document.createElement("p");

    countryContainer.appendChild(div);
    div.appendChild(img);
    div.appendChild(countryName);
    div.appendChild(population);
    div.appendChild(region);
    div.appendChild(capitalCity);

    img.src = data[i].flags.png;
    countryName.innerText = data[i].name.common;
    population.innerText = `Population: ${data[i].population}`;
    region.innerText = `Region: ${data[i].region}`;
    capitalCity.innerText = `Capital city: ${data[i].capital}`;
  }
}
getData();
