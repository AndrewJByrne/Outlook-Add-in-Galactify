/* global Office */
(function(){
  'use strict';

  // The Office initialize function must be run each time a new page is loaded
  Office.initialize = function(reason){
    $(document).ready(function(){
      app.initialize();

      displayItemDetails();
    });
  };

  // Fills out the scrolling text with From, Subject and Body of the current email item. 
  function displayItemDetails(){
    var item = Office.cast.item.toItemRead(Office.context.mailbox.item);
    $('#subject').text(item.subject);

    var from;
    if (item.itemType === Office.MailboxEnums.ItemType.Message) {
      from = Office.cast.item.toMessageRead(item).from;
    } 

    if (from) {
      $('#from').text(from.displayName);
    }
    
    // We need to determine if body.getAsync() is defined. We require this method in order to
    // retrieve the body test for parsing. This method was added in v1.3 of the API
    // and may not be available on every Outlook client.
    // For more information, please see Understanding API Requirement Sets at
    // https://dev.outlook.com/reference/add-ins/tutorial-api-requirement-sets.html
    if (Office.context.mailbox.item.body.getAsync() !== undefined) {
        Office.context.mailbox.item.body.getAsync('text',function (asyncResult) {
            $('#body').text(asyncResult.value);
        });
    }
    else {
         $('#body').text('This is not the email body you\'re looking for. We can\'t retrieve the body of this email because it needs the body.getAsync() method. Unfortunatley, that method is not available in this version of Outlook.' );
    }
  }
})();
