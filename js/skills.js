// document.addEventListener('DOMContentLoaded', function() {
//     var circles = document.querySelectorAll('circle');

//     circles.forEach(function(circle) {
//         var percentage = circle.getAttribute('data-percentage');
//         var circumference = 2 * Math.PI * circle.getAttribute('r');
//         var offset = circumference * (1 - percentage / 100);

//         circle.style.strokeDasharray = `${circumference} ${circumference}`;
//         circle.style.strokeDashoffset = circumference;

//         circle.closest('.skills').addEventListener('mouseenter', function() {
//             circle.style.strokeDashoffset = offset;
//         });

//         circle.closest('.skills').addEventListener('mouseleave', function() {
//             circle.style.strokeDashoffset = circumference;
//         });
//     });
// });
