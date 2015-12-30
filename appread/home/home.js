(function(){
  'use strict';

  // The Office initialize function must be run each time a new page is loaded
  Office.initialize = function(reason){
    jQuery(document).ready(function(){
      app.initialize();

      displayItemDetails();
    });
  };

  // Fills out the scrolling text with From, Subject and Body of the current email item. 
  function displayItemDetails(){
    var item = Office.cast.item.toItemRead(Office.context.mailbox.item);
    jQuery('#subject').text(item.subject);

    var from;
    if (item.itemType === Office.MailboxEnums.ItemType.Message) {
      from = Office.cast.item.toMessageRead(item).from;
    } 

    if (from) {
      jQuery('#from').text(from.displayName);
    }
    
    Office.context.mailbox.item.body.getAsync("text",function (asyncResult) {
        jQuery('#body').text(asyncResult.value);
    });
  }
})();
