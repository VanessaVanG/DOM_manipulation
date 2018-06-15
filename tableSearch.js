const tbody = document.querySelector('tbody');
const input = document.querySelector('#Search');
const dropdown = document.querySelector('.dropdown-menu');
let filteredSightings = dataSet;

//add event listener to dropdown buttons
dropdown.addEventListener('click', e => {
  //remove whitespace and lowercase the user's search term
  const filterValue = input.value.trim().toLowerCase();
  const button = e.target;
  if (button.tagName === 'BUTTON') {
    let searchCategory = button.value;
    filteredSightings = dataSet.filter(sighting => {
      let sightingFiltered = sighting[searchCategory].toLowerCase();
      return sightingFiltered === filterValue;
    });
  renderTable();
  }
});

//renderTable renders the filteredData to the tbody
function renderTable() {
  tbody.innerHTML = "";
  for (let i = 0; i < filteredSightings.length; i++) {
    //get the current data object and its fields
    let sighting = filteredSightings[i];
    let fields = Object.keys(sighting);
    //create a new row and set index
    let row = tbody.insertRow(i);

    //for each field create a new cell and set its inner text to
    //be the current value at the current field
    for (let j = 0; j < fields.length; j++) {
      let field = fields[j];
      let cell = row.insertCell(j);
      cell.innerText = sighting[field];
    }
  }
}

//Render the table for the first time on page load
renderTable();

  