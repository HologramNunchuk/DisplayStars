showStars(10);

function showStars(input) {
  for (let row = 1; row <= input; row++) {
    let pattern = "";
    for (let i = 0; i <= row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
