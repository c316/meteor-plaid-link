Package.describe({
  name: "joshjoe:plaid-link",
  summary: "A Meteor wrapper for Plaid Link",
  version: "0.1.0",
  git: "https://github.com/c316/meteor-plaid-link"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["meteor", "ddp", "jquery"]);

  api.addFiles("client/index.js", ["client"]);

  api.export("Plaid", "client");
});


Package.onTest(function (api) {
  api.use("tinytest");
  api.use("joshjoe:plaid-link");

  api.addFiles("tests/client/index.js", ["client"]);

});
