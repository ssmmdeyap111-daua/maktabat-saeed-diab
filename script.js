function moveBooks(direction) {
  const container = document.getElementById("booksContainer");

  if (!container) {
    alert("❌ لم يتم العثور على booksContainer");
    return;
  }

  container.scrollBy({
    left: direction * 300,
    behavior: "smooth"
  });
}
