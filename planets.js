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
            getImages(planets)
            getList(planets)
        },
    function(err)
        {
            return err
        })

var getImages = function(Planetsdata)
{
return d3.select("#B3")
  .selectAll("img")
  .data(Planetsdata)
  .enter()
  .append("img")
  .attr("src", function(d) {return (d.img)})
}
var getList = function(PlanetList)
{
return d3.select("#B4")
  .selectAll("ol")
  .data(PlanetList)
  .enter()
  .append("ol");
    d3.selectAll("ol")
    .append("li")
    .text(function(d) {return (d.name)})
}