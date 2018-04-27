const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
               // Uparrow(38)
               // Uparrow(38)
               // DownArrow (40)
               // DownArrow (40)
               // LeftArrow (37)
               // RightArrow (39)
               // LeftArrow (37)
               // RightArrow (39)
               // B key (66)
               // A Key (65)

function init() {
  let index = 0;
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
        
    }
  })

}
