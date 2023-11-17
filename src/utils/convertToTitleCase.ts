export default function convertToTitleCase(str: string) {
  var words = str.split("_");

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  var result = words.join(" ");

  return result;
}
