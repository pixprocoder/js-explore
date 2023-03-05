const song = "keMon aso kivabe acho ami jani nah";

const doesExit = song.toLowerCase().includes("kemon");
// console.log(doesExit);

if (song.indexOf("d") !== -1) {
  console.log(true);
} else {
  console.log(false);
}

// startsWith
console.log(song.startsWith("ke"));

// endWith
console.log(song.endsWith("i"));
