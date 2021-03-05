// console.loggin the data from data.js
var tableData = data;
// console.log(tableData);

// get a reference to the table body through the id I entered
var tbody = d3.select("#myTable");

// Next, loop through each object in the tabledata and append a row and cells for each value
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
  var button_filter = d3.select("#filter-btn");
  // Select the entire form
  var form_filter = d3.select("#form");

  // Create event handlers for clicking the button or pressing the enter key

  button_filter.on("click", selectFilter);
  form_filter.on("submit",selectFilter);




  // Create the function to run for both events
  function selectFilter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

 // Select the input element CITY and get the raw HTML node
    var inputDate = d3.select("#datetime");
    // // Get the value property

    var inputValueDate = inputDate.property("value");
    //console.log(inputValueDate);


//City
    var inputDate = d3.select("#city");
    // // Get the value property
    var inputValueCity = inputDate.property("value");
    //console.log(inputValueCity);

//State
    var inputDate = d3.select("#state");
    // // Get the value property
    var inputValueState = inputDate.property("value");
    //console.log(inputValueState);


//Shape
    var inputDate = d3.select("#shape");
  // // Get the value property
    var inputValueShape = inputDate.property("value");
  //
    // console.log(inputValueShape);

    // // Print the value to the console
    // console.log(inputValue);
    var filteredData =  tableData

    if (inputValueDate) {
      filteredData = filteredData.filter(day => day.datetime === inputValueDate);
    }

    if (inputValueCity) {
      filteredData =  filteredData.filter(day => day.city === inputValueCity);
    }

    if (inputValueState) {
      filteredData =  filteredData.filter(day => day.state === inputValueState);

    }

    if (inputValueShape) {
        filteredData =  filteredData.filter(day => day.shape === inputValueShape);
    }
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
