function moveBooks(dir) {
  const container = document.getElementById("booksContainer");
  container.scrollLeft += dir * 220;
}
<button class="arrow" onclick="scrollBooks(-1)">❮</button>
<button class="arrow" onclick="scrollBooks(1)">❯</button>

<script>
function scrollBooks(dir) {
  const c = document.getElementById("booksContainer");
  c.scrollLeft += dir * 200; // كل مرة تتحرك 200 بكسل
}
</script>

