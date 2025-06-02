  // Simple JavaScript for checkbox functionality
  document.addEventListener('DOMContentLoaded', function() {
    // Handle parent checkbox
    const parentCheckboxes = document.querySelectorAll('.parent-checkbox');
    parentCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const isChecked = this.checked;
            const table = this.closest('table');
            const childCheckboxes = table.querySelectorAll('tbody input[type="checkbox"]');
            childCheckboxes.forEach(function(childCheckbox) {
                childCheckbox.checked = isChecked;
            });
        });
    });

    // Close button for notice
    const closeButton = document.querySelector('.toggle-hide-use-of-sejoli');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            const notice = document.getElementById('use-of-sejoli-widgets');
            notice.style.display = 'none';
        });
    }
});