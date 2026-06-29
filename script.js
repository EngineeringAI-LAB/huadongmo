const yearNode = document.getElementById("current-year");
const updatedNode = document.getElementById("last-updated");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (updatedNode) {
  const modified = new Date(document.lastModified);
  updatedNode.textContent = Number.isNaN(modified.getTime())
    ? "recently"
    : modified.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
}
