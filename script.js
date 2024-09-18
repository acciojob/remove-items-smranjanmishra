document.getElementById("removeButton").addEventListener("click", function() {
    // Get the select element
    const colorSelect = document.getElementById("colorSelect");

    // Remove the selected option from the dropdown
    colorSelect.remove(colorSelect.selectedIndex);
});