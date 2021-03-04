// console.loggin the data from data.js
var tableData = data;
// console.log(tableData);

// get a reference to the table body through the id I entered
var tbody = d3.select("#myTable");

// Next, loop through each object in the tabledata
// and append a row and cells for each value
tableData.forEach(day => {
  // create a new row
var row = tbody.append("tr");
    Object.values(day).forEach(value => {
      row.append("td").text(value);
    });
  });

  Object.entries(data[0]).forEach(([key, value])=> {
    // console.log(`they key is ${key}, and the value is ${value}`);
  });


  // Select the button
  var button = d3.select("#filter-btn");

  // Select the entire form
  var form = d3.select("#form");

  // Create event handlers for clicking the button or pressing the enter key
  button.on("click", selectDate);
  form.on("submit",selectDate);

  // Create the function to run for both events
  function selectDate() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    //
    // // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    //
    // // Get the value property
    var inputValue = inputDate.property("value");
    //
    // // Print the value to the console
    // console.log(inputValue);
    var filteredData =  tableData.filter(day => day.datetime === inputValue);
    console.log(filteredData);
    //
    //
    tbody.html("");

    filteredData.forEach(day => {
      // create a new row
    var row = tbody.append("tr");
        Object.values(day).forEach(value => {
          row.append("td").text(value);
        });
      });

      Object.entries(data[0]).forEach(([key, value])=> {
        // console.log(`they key is ${key}, and the value is ${value}`);
      });
    };
