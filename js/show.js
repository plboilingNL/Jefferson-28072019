  var $toggleButtons = $('.toggle-content');
      var $fullTextWrappers = $('.fulltext');
      var fullText;
      var toggleButtonText;
      
      $fullTextWrappers.attr('hidden', true);
      $toggleButtons.removeAttr('hidden');
      // add listener for each button
      $toggleButtons.each(function () {
        $(this).on('click', function () {
          fullTextWrapper = $(this).parent().find('.fulltext');
          toggleButtonText = $(this).find('.text');
          console.log(fullTextWrapper);
          // change attributes and text if full text is shown/hidden
          if (!fullTextWrapper.attr('hidden')) {
            toggleButtonText.text('Show More');
            fullTextWrapper.attr('hidden', true);
            $(this).attr('aria-expanded', false);
          } else {
            toggleButtonText.text('Show Less');
            fullTextWrapper.removeAttr('hidden');
            $(this).attr('aria-expanded', true);
          }
        });
      });


  