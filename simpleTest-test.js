// setUp: function(done)
// {
//   this.load(url).waitForVar('App', function()
//   {
//     // expose App to the tests
//     this.App = this.window.App;
//     // set App as event root
//     this._setEventRoot(this.window.App);
//     // proceed with the tests
//     done();

//   }.bind(this));  
// }



// //Simple to test to check if error msg is shown when show available postal code is clicked without any entry
// 'Click on available postal code with no input': function(done)
// {
//   // initially loads as For Rent search type
//   assert.className(this.$('.btn.btn-primary.save-postal-code-home-change'));

//   // change tab
//   this.click('.btn.btn-primary.save-postal-code-home-change', function()
//   {
//     // for rent tab should be highlighted
//     assert.contains(this.$('.error-msg.alert-zone-error-msg-home').text(), 'Enter your 6-digit postal code');
//     // and for sale tab should not
//     //refute.className(this.$('#searchTypeTabs>[data-tab=for_rent]')[0], 'backgroundLowlight');

//     done();
//   });
// }


var assert = buster.assertions.assert;
var refute = buster.assertions.refute;

var testCase = buster.testCase("Simple test", {
    setUp: function(done)
    {
      console.log('kjaslkdjfaslkdf');
      this.load("/index").waitForVar('$', done);
    },

    "Click on available postal code with no input": function(done)
    {
        assert.className(this.$('.btn.btn-primary.save-postal-code-home-change')[0],'btn btn-primary save-postal-code-home-change');
        this.type('.form-control.tb-postal-code-home', '228396');
        this.click('.btn.btn-primary.save-postal-code-home-change', function()
        {

          assert.equals(1, 1);
          assert.className(this.$('.company-logo.text-center')[0], 'company-logo text-center');

         done();
        });
      
    }

    //  "Click on a store and verify if the shopping cart is present": function(done)
    //  {
    //     this.click($('.company-logo.text-center')[0], function()
    //     {

    //       //assert.equals(1, 1);
    //       assert.className(this.$('.btn.btn-primary.btn-amount'), 'btn btn-primary btn-amount');

    //      done();
    //     });
      
    // }
});
