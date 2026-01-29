function moveBooks(dir) {
  const container = document.getElementById("booksContainer");
  container.scrollLeft += dir * 220;
}

