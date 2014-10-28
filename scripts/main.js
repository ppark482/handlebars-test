(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['people'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li>"
    + escapeExpression(((helper = (helper = helpers.names || (depth0 != null ? depth0.names : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"names","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.akaNames : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();

var library = {
  books : [
    { book: 'Moby Dick', author: 'Herman Melville' },
    { book: 'Great Expectations', author: 'Charles Dickens'},
    { book: 'Where the Red Fern Grows', author: 'Wilson Rawls'}
  ]
};
var source = $('#book').html();
var template = Handlebars.compile(source);
$('.books').html(template(library));

var peopleData = {
  people: [
    {firstName: "Andrew", lastName: "El-Masry", table: "front right"},
    {firstName: "Chase", lastName: "Simpson", table: "front left"},
    {firstName: "Jon", lastName: "Crocker", table: "back right"},
    {firstName: "Chelsea", lastName: "Franz", table: "back left"},
    {firstName: "Dean", lastName: "Gilewicz", table: "front right"},
    {firstName: "Matthew", lastName: "Griffeth", table: "front right"},
    {firstName: "Emory", lastName: "Griffith", table: "back left"},
    {firstName: "Joanna", lastName: "Edgell", table: "back right"},
    {firstName: "Maggie", lastName: "Martin", table: "front right"},
    {firstName: "Max", lastName: "Ehnert", table: "front left"},
    {firstName: "Paul", lastName: "Park", table: "back left"},
    {firstName: "Richard", lastName: "Daniel", table: "front left"},
    {firstName: "Thomas", lastName: "McCracken", table: "front left"},
    {firstName: "Victoria", lastName: "Nicholson", table: "back right"},
    {firstName: "Wendy", lastName: "Nichols", table: "back right"},
    {firstName: "Mike", lastName: "Zevitas", table: "back left"}
  ]
};
// Grab the template
var peoples = $('#peopleList').html();
// Compile the Template (creates the function)
var render = Handlebars.compile(peoples);
// Send that data in
$('.peopleInClass').html( render(peopleData));

var gulpMaster = {
  akaNames: [
  {names: "Richy Rich"},
  {names: "General Gulp"},
  {names: "Master of Design"},
  {names: "The Earl of Gulp"},
  {names: "The Big Gulp Effect"},
  {names: "Breaking Gulp"},
  {names: "Triple Ds"},
  {names: "Gulp Master Flex"},
  {names: "Sore-From-Ultimate"},
  {names: "Notorious G.U.L.P"},
  {names: "Game of Gulps"},
  {names: "Duke Gulpington"},
  {names: "Gulp Daddy"},
  {names: "GulpBack Mountain"}
  ]
}
// Grab the template
var listOut = Handlebars.template['people'];
$('.gulper').html( listOut(gulpMaster));
