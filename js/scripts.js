//jQuery(document).ready(function() {
//   jQuery("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   jQuery("p").click(function() {
//     alert("This is a paragraph.");
//   });
//
//   jQuery("img").click(function() {
//     alert("This is an image.");
//   });
// });
// $(document).ready(function() {
//   $("p").click(function() {
//     $("img").show();
//   });
// });
// $(document).ready(function() {
//   $("p").click(function() {
//     $(".walrus-showing").toggle();
//     $(".
//     walrus-hidden").toggle();
//   });
// });

    // $(document).ready(function() {
    //   $(".clickable").click(function() {
    //     $("#walrus-showing").toggle();
    //     $("#walrus-hidden").toggle();
    //   });
    // });
    $(document).ready(function() {
            $("button#green").click(function() {
              $("body").addClass("green-background");
            });

            $("button#yellow").click(function() {
              $("body").addClass("yellow-background");
            });

            $("button#red").click(function() {
              $("body").addClass("red-background");
            });
          });
      //     $("button#green").click (function() {
      //   $("body").css("background-color", "green");
      // });//not the best approach.
