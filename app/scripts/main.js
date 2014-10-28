// var peopleData = {
//   people: [
//     {firstName: "Andrew", lastName: "El-Masry", table: "front right"},
//     {firstName: "Chase", lastName: "Simpson", table: "front left"},
//     {firstName: "Jon", lastName: "Crocker", table: "back right"},
//     {firstName: "Chelsea", lastName: "Franz", table: "back left"},
//     {firstName: "Dean", lastName: "Gilewicz", table: "front right"},
//     {firstName: "Matthew", lastName: "Griffeth", table: "front right"},
//     {firstName: "Emory", lastName: "Griffith", table: "back left"},
//     {firstName: "Joanna", lastName: "Edgell", table: "back right"},
//     {firstName: "Maggie", lastName: "Martin", table: "front right"},
//     {firstName: "Max", lastName: "Ehnert", table: "front left"},
//     {firstName: "Paul", lastName: "Park", table: "back left"},
//     {firstName: "Richard", lastName: "Daniel", table: "front left"},
//     {firstName: "Thomas", lastName: "McCracken", table: "front left"},
//     {firstName: "Victoria", lastName: "Nicholson", table: "back right"},
//     {firstName: "Wendy", lastName: "Nichols", table: "back right"},
//     {firstName: "Mike", lastName: "Zevitas", table: "back left"}
//   ]
// };
var library = {
  books : [
    { book: 'Moby Dick', author: 'Herman Melville' },
    { book: 'Great Expectations', author: 'Charles Dickens'},
    { book: 'Where the Red Fern Grows', author: 'Wilson Rawls'}
  ]
};
var source = $('#books').html();
var template = Handlebars.template('books');
$('.books').html(template(data));

//
// // Grab the template
// var source = $('#peopleList').html();
//
// // Compile the Template (creates the function)
// var render = Handlebars.templates.people['source'];
//
// // Send that data in
// $('.peopleInClass').html( render(peopleData));
