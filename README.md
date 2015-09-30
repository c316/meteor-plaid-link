## A Meteor wrapper for Plaid Link

## Setup

For testing you'll need to add this to your template helper of the view you would like to use plaid-link in. 

    Template.Setup.helpers({
      load_plaid: function() {
      
      // the meteor-plaid-link package sets the session var "pladiLinkLoaded" to true when it has finished loading
      if(Session.get("plaidLinkLoaded")) {
        sandboxHandler = Plaid.create({
          env: 'tartan',
          clientName: 'Client Name',
          key: 'test_key',
          product: 'connect',
          longTail: true, // You need longtail coverage enabled, you need to email support@plaid.com to ask for this
          onLoad: function () {
          },
          onSuccess: function (public_token) {
            console.log(public_token);
            Meteor.call('plaid_user_setup', public_token, function (error, result) {
              if (error) {
                console.log(error);
              } else {
                console.dir(result);
                if (result && result.error) {
                  console.dir(result);
                } else {
                  // Handle the success here
                }
              }
            });
          },
        });
      }
    }
    });
  
    Template.Setup.events( funciton () {
      'click button': function () {
        // Open Plaid Link
        sandboxHandler.open();
      }
    });
  
## z-index

I initially had a problem with the Plaid Link window displaying behind the other elements on the page. I added this to my css file and it fixed it. 

    #plaid-connect-iframe {
        z-index: 100;
    }
    #plaid-link-iframe {
        z-index: 100;
    }
