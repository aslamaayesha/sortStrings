function sortStrings()
{
  let values = document.getElementById("inputText").value.split("\n");
  let sorted = values.sort();
  document.getElementById("inputText").value = sorted.join('\n');
}