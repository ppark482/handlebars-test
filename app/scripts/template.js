(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['people'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "\n<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.people : depth0)) != null ? stack1.firstName : stack1), depth0))
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.people : depth0)) != null ? stack1.lastName : stack1), depth0))
    + " + 'sits at the ' + "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.people : depth0)) != null ? stack1.table : stack1), depth0))
    + " + '.'</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<!-- ";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.people : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " -->\n";
},"useData":true});
})();