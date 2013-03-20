/*global window*/
(function () {
  "use strict";
  var $ = window.$,
    document = window.document,
    main = function () {
      var stack = [],
        i = 0,
        tabCounter = 0,
        setUpClickHandler = function (anchor) {
          anchor.click(function () {
            var target = $(this).attr("href");

            $(".active").removeClass("active");
            $(this).addClass("active");
            $("#" + target).addClass("active");

            return false;
          });
        };

      $.getJSON("all.json", function (todos) {
        
        todos.forEach(function (todo) {
          todo.categories.forEach(function (category) {
             stack.push(category);
          });
        });

        //http://stackoverflow.com/questions/5381621/jquery-function-to-get-all-unique-elements-from-an-array
        var unique = stack.filter(function (itm, i, a) {
          return i === a.indexOf(itm);
        });

        unique.forEach(function (tag) {
          $("#tab2").append("<div id ='" + unique[i] + "'><h3>" + tag + "</h3><br /><hr /></div>");
          i += 1;
        });

        //populates All and Categories tabs
        todos.forEach(function (todo) {
          $("#tab1").append("<div id='todos" + tabCounter + "'></div>");
          $("#tab1 #todos" + tabCounter).append("<h3>" + todo.description + " <button class='destroy'>x</button></h3>" + "<h4>tagged: </h4>");
          todo.categories.forEach(function (category) {
            //for tab 1
            $("#tab1 #todos" + tabCounter).append("<p>" + category + "</p>");
            //for tab 2
            $("#" + category + " br").before("<span class='" + todo.description + "'><p>" + todo.description 
            + " <button class='destroy'>x</button></p></span>");
          });
          $("#tab1 #todos" + tabCounter).append("<br /><hr />");
        });        
        
        $('body').on("click", ".destroy", function () {
            $(this).parent().parent().remove();
        });

        
        
        /*$('body').on("click", ".destroy", function () {
          $("#tab2").filter(function (index) {
            return $(todo.description, this);
          }).parent().remove();
          $(this).parent().parent().remove();
        });*/

        //Add tab

        //end Add tab
      });

      setUpClickHandler($(".tabcontainer .tab"));


    };

  $(document).ready(main);

}());