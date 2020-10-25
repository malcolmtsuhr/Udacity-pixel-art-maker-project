/* Javascript code for Udacity Pixel Art Project
* Malcolm Suhr - student author
*/

// Select color input
var choiceColor = document.getElementById('colorPicker');
// Select size input
var canvasSize = document.getElementById('sizePicker');
// Select table dimensions
var tableWidth = document.getElementById('inputWidth');
var tableHeight = document.getElementById('inputHeight');
// Reference html table
var canvasTable = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
const submitted = document.getElementById('sizePicker');

submitted.addEventListener('submit', makeGrid);

// Function to run on submit, triggering grid creation
function makeGrid(eSubmit) {
    eSubmit.preventDefault();
    var body = document.getElementById('pixelCanvas');

    // Remove any existing table element in body to refresh canvas
    if (body.hasChildNodes()) {
      body.firstChild.remove();
    };

    var table = document.createElement("table");
    var canvasBody = document.createElement("tBody");

    // Create grid contents
    for (var i = 0; i < tableHeight.value; i++) {
      // Create row
      var row = document.createElement("tr");
      // Create cells
      for (var j = 0; j < tableWidth.value; j++) {
        const cell = document.createElement("td");
        cell.style.backgroundColor = 'white';
        // Dynamic event listener generated to paint each cell
        cell.addEventListener('click', function paint_cell(event) {
          cell.style.backgroundColor = choiceColor.value;
        });
        // Add cell to row
        row.appendChild(cell);
      };

      // Add row to table body
      canvasBody.appendChild(row);
      // Add body to table
      table.appendChild(canvasBody);
      body.appendChild(table);
      // Style the table with border
      table.setAttribute("border", "2");
    };
};
