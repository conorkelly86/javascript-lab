function reverseWords(str) {
  let x = str
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
  //      split str {splits the string of words into letters}.reverse {reverses the string of split letters}
  //      .join{joins the split single letters out.
  //      .split {splits out each word} .reverse {reverses all words}
  //      .join {joins the words from being split, to a complete sentence}
  return x;
}
