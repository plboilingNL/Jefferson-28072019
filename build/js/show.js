var fullText,toggleButtonText,$toggleButtons=$(".toggle-content"),$fullTextWrappers=$(".fulltext");$fullTextWrappers.attr("hidden",!0),$toggleButtons.removeAttr("hidden"),$toggleButtons.each(function(){$(this).on("click",function(){fullTextWrapper=$(this).parent().find(".fulltext"),toggleButtonText=$(this).find(".text"),console.log(fullTextWrapper),fullTextWrapper.attr("hidden")?(toggleButtonText.text("Show Less"),fullTextWrapper.removeAttr("hidden"),$(this).attr("aria-expanded",!0)):(toggleButtonText.text("Show More"),fullTextWrapper.attr("hidden",!0),$(this).attr("aria-expanded",!1))})});