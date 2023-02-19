  $(document).ready(function() {
    // Listen for the click event on the dark mode toggle button
    $('#dark-mode-toggle').click(function() {
      // Toggle the "dark-mode" class on the body element
      $('body').toggleClass('dark-mode');
  
      // If the "dark-mode" class is now applied to the body element
      if ($('body').hasClass('dark-mode')) {
        // Set CSS styles for the dark mode
        $('body').css({
          'background-color': '#1a1a1a',
          'color': '#fff',
          'box-shadow': '0 0 10px #ff6f00'
          // add more styles as needed
        });
      } else {
        // Reset CSS styles to the default values
        $('body').css({
          'background-color': '#fff',
          'color': '#000',
          'box-shadow': 'none'
          // add more styles as needed
        });
      }
    });
  });
  