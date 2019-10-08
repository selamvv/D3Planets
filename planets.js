var Names = ["Mercury", "Venus", "Jupiter"]
d3.select("#A1")
  .selectAll("div")
  .data(Names)
  .enter()
  .append("div")
  .text(Names)
d3.select("#A2")
  .selectAll("div")
  .data(Names)
  .enter()
  .append("div")
  .text(function(d) {return d})
var planPromise = d3.json("planets.json")
    planPromise.then(function(planets)
        {
            console.log(planets)
        },
    function(err)
        {
            return err
        })


d3.select("#B3")
  .selectAll("img")
  .data(planPromise)
  .enter()
  .append("img")
  .attr("src", "bob")