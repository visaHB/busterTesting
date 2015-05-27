var config = module.exports;

config["Functional Tests"] = {
    rootPath: "../",
    environment: "browser", // or "node"
    tests: [
        "test/*-test.js"
    ],

    resources:
  [
    {path: '/index', backend: 'http://dev-jijc.honestbee.com'},
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


// var config = module.exports;

// config["Browser tests"] = {
//     environment: "browser",
//     tests: ["simpleTest-test.js"],
//     resources:
//     [
//         // {path: '/', backend: 'http://localhost:3030/'}
//         {path: '/', backend: 'http://dev-jijc.honestbee.com/'}
//     ],
//     extensions:
//     [
//         require('buster-functional')
//     ],
//     'buster-functional':
//     {
//         timeout: 120 // seconds 
//     }
// };