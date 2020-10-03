function changeColor() {
  const allListItems = document.querySelectorAll('li');
  allListItems.forEach(function(listItem) {
    listItem.style.color = 'black';
  })
}
