jQuery(document).ready((function(e){"use strict";var s=e("#contact-form"),t=e("#form-messages");e(s).submit((function(r){r.preventDefault();var a=e(s).serialize();e.ajax({type:"POST",url:e(s).attr("action"),data:a}).done((function(s){e(t).removeClass("error"),e(t).addClass("success"),e(t).text(s),e("#name, #email, #phone_number, #subject, #message").val("")})).fail((function(s){e(t).removeClass("success"),e(t).addClass("error"),""!==s.responseText?e(t).text(s.responseText):e(t).text("Oops! An error occured and your message could not be sent.")}))}))}));