this["JST"] = this["JST"] || {};

this["JST"]["templates/apple.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div style=\"width:100%\">\n	<div data-role=\"header\" style=\"text-align:center; background-color: #1E1E1E; color: #fff;\">\n		<h1>Ec Shlirë</h1>\n	</div>\n	<div style=\"height:10px; background-color: yellow;\"></div>\n	<br><br>\n	<div data-role=\"content\" style=\"text-align:center;\">\n		<div style=\"margin: 0 auto; width: 50%;\">\n			<a href=\"#\" data-icon=\"back\" style=\"width:50%\" class=\"back\">\n				<img class=\"img-circle\" style=\"width:40%\" src=\"https://image.freepik.com/free-icon/back-button-circle_318-67964.png\">\n			</a>\n			<h5>"
    + container.escapeExpression(((helper = (helper = helpers.search_label || (depth0 != null ? depth0.search_label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"search_label","hash":{},"data":data}) : helper)))
    + "</h5>\n		</div>\n	</div>\n</div>";
},"useData":true});

this["JST"]["templates/landing_page.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<div style=\"width:50%; float: left\">\n				<a href=\"#page1\" style=\"width:50%; \">\n					<img class=\"image img-circle\" style=\"width:60%; border: 1px solid black;\" id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" src=\""
    + alias4(((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data}) : helper)))
    + "\">\n					<h5>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h5>\n				</a>\n				<br>\n			</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div style=\"width:100%\">\n	<div data-role=\"header\" style=\"text-align:center; background-color: #1E1E1E; color: #fff;\">\n		<h1>Ec Shlirë</h1>\n	</div>\n	<div style=\"height:10px; background-color: yellow;\"></div>\n	<br>\n	<div data-role=\"content\" style=\"text-align:center;\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>";
},"useData":true});