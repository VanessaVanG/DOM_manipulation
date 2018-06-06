//get references to the tbody element, imput field, and button
var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");

//add an event listener to the searchBtn, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// set filtered data to unfiltered data initially
var filteredSightings = dataSet; 

//renderTable renders the filteredData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredSightings.length; i++) {
    //get the current data object and its fields
    var sighting = filteredSightings[i];
    var fields = Object.keys(sighting);
    //creat a new row and set index
    var $row = $tbody.insertRow(i);
    for (let j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  var filterDT = $datetimeInput.value.trim();
  
  //set the filteredSightings to the sightings that match the filter
  filteredSightings = dataSet.filter(function(sighting) {
    var sightingDT = sighting.datetime.toLowerCase();

    //if true, add sighting to the filtered sightings
    return sightingDT === filterDT;
  });
  renderTable();
}

//Render the table for the first time on page load
renderTable();
