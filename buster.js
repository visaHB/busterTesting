var config = module.exports;

config["Functional Tests"] = {
    rootPath: "../",
    environment: "browser",
    tests: [
        "test/*-test.js"
    ],

    resources:
  [
    {path: '/index', backend: 'http://honestbee.com'},
  ],
    extensions:
  [
    require('buster-functional')
  ],
  'buster-functional':
  {
    timeout: 120 // seconds 
  }
}
