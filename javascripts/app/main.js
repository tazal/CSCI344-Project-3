var main = function () {
  "use strict";
  console.log("hello world");
  $.getJSON("all.json", function (todos) {
    
    //populates Tab 1
    todos.forEach(function (todo) {
      $("#tab1").append("<h3>" + todo.description + "</h3>" + "<h4>tagged: </h4>");
      todo.categories.forEach(function (category) {
        $("#tab1").append("<p>" + category + "</p>");
      });
    });
    
    //populates Tab 2
    todos.forEach(function (todo) {
      todo.categories.forEach(function (category) {
        if (isUnique(category)) {
          $("#tab2").append("<h3>" + category + "</h3>");
        }
      });
    });  
  });
  
  var isUnique = function (string) {
    var i,
      stack = new Array(1);
    for (i = 0; i < todos.length; i++) {
      console.log(todos[i]);
    };
  }

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