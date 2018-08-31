const string = "_chapter.txt";
const number = 1;

function concatNPad(pattern, numb) {
  numb = numb < 9 ? "0" + numb : numb;
  return pattern.replace("#", numb);
}

console.log(concatNPad(string, number));
