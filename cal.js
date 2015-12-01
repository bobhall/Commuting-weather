
$(document).ready(function() {
  var width = 960,
  height = 140;
  var dates = [];

  d3.text("data.txt", function(unparsedData){

    /* Parse file */
    var data = d3.csv.parseRows(unparsedData);
    data.shift();

    var tmpDate = null;
    data.forEach(function(d, ix){
      var parts = d[0].split("-"),
          year  = parseInt(parts[2]),
          day   = parseInt(parts[1]),
         month  = parseInt(parts[0]);

      month = month - 1; // Javascrpit Dates are zero-based, ie Jan=0, Feb=1, etc...

      var date = new Date(year, month, day);
      var leg = d[1],
         cond = d[2];

      if (tmpDate == null) {
	tmpDate = {date: date}
	tmpDate[leg] = cond;
      }
      else {
	tmpDate[leg] = cond;
	dates.push(tmpDate);
	tmpDate = null;
      }
    }); //data.forEach
  });

  
  console.log("hello robert");

  var svg = d3.select("#main")
    .append("svg")
    .attr("width", 900)
    .attr("height", 900)
    .style("background-color", "white");
  
//  var year = d3.select('#main').selectAll('svg')
  svg.selectAll("g")
    .data([2013,2014,2015])
  .enter().append("g")
    .attr("width", 800)
    .attr("height", 120)
    .attr("x", function(d, ix){ return ix* 50 ;})
    .attr("y", function(d, ix){ return ix* 40;})
    .style("color", "red")
    .attr("class", "year");


  var month = d3.selectAll(".year").selectAll("g")
     .data(["Jan", "Feb", "Mar"])
  .enter().append("g")
    .attr("width", 90)
    .attr("height", 90)
    .attr("class", "month");


  d3.selectAll(".month").selectAll("rect")
    .data([1,2,3])
  .enter().append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .style("color", "red");


});
