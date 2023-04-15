
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checkedCount = 0;

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        checkedCount++;
      } else {
        checkedCount--;
      }

      if (checkedCount === 3) {
        checkboxes.forEach(function(checkbox) {
          checkbox.disabled = true;
        });
      }
    });
  });
