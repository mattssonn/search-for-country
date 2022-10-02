async function getData() {
  const response = await fetch(`https://restcountries.com/v3.1/name${name}`);
  const data = await response.json();

  const countryContainer = document.getElementById("country-container");

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
    console.log(data[i].region);
  }
}
getData();

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
