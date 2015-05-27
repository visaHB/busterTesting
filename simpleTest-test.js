var assert = buster.assertions.assert;
var refute = buster.assertions.refute;

var testCase = buster.testCase("Simple test", {

    setUp: function(done)
    {
      console.log('Testing');
      //this.load("/index").waitForVar('$', done);

      this.load("/index").waitForVar('App', function()
      {
          // expose App to the tests 
          this.App = this.window.App;
          // set App as event root 
          this._setEventRoot(this.window.App);
          // proceed with the tests 
          done();
 
        }.bind(this));  


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

});