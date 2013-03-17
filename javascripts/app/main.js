var main = function () {
  console.log("hello world");
  $.getJSON("all.json", function (todos) {
    var i;
    for (i = 0; i < todos.length; i++) {
      console.log(todos[i]);
    };
    
    todos.forEach(function (todo) {
      console.log(todo.description);
      todo.categories.forEach(function (category) {
        console.log("  " + category);
      });
    });
  });
  
  var setUpClickHandler = function (anchor) {
    anchor.click(function () {
      var target = $(this).attr("href");
    
      $(".active").removeClass("active");
      $(this).addClass("active");
      $("#"+target).addClass("active");
    
      return false;
    });    
  };
  setUpClickHandler($(".tabcontainer .tab"));
};

$(document).ready(main);