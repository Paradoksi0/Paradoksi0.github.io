document.getElementById('toggleButton').addEventListener('click', function () {
    const tableWrapper = document.getElementById('tableWrapper');
    this.classList.toggle('rotated');
    tableWrapper.classList.toggle('expanded');
});