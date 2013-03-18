var main = function () {
  "use strict";
  var stack = new Array();

  $.getJSON("all.json", function (todos) {
    
    //populates Tab 1
    todos.forEach(function (todo) {
      $("#tab1").append("<h3>" + todo.description + "</h3>" + "<h4>tagged: </h4>");
      todo.categories.forEach(function (category) {
        $("#tab1").append("<p>" + category + "</p>");
      });
      $("#tab1").append("<br />");
    });
    
    //populates Tab 2
    //TODO: Create a function that searches all.json tag-by-tag, making an array for each unique tag.
    
    todos.forEach(function (todo) {
      todo.categories.forEach(function (category) {        
        stack.push(category);
      });
    });
    
    //http://stackoverflow.com/questions/5381621/jquery-function-to-get-all-unique-elements-from-an-array
    var unique=stack.filter(function (itm, i, a){
      return i==a.indexOf(itm);
    });
    
    var i = 0;
    
    unique.forEach(function (tag) {
      $("#tab2").append("<div id =" + unique[i] + "><h3>" + tag + "</h3></div>");
      i += 1;
    });
    
    todos.forEach(function(todo) {
      todo.categories.forEach(function (category) {
        $("#" + category).append("<p>" + todo.description + "</p>");
      });
    });
    
  });

  var setUpClickHandler = function (anchor) {
    anchor.click(function () {
      var target = $(this).attr("href");

      $(".active").removeClass("active");
      $(this).addClass("active");
      $("#" + target).addClass("active");

      return false;
    });
  };
  
  setUpClickHandler($(".tabcontainer .tab"));
  
};

$(document).ready(main);