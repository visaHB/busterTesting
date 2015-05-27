var assert = buster.assertions.assert;
var refute = buster.assertions.refute;

var testCase = buster.testCase("Simple test", {
    setUp: function(done)
    {
      console.log('Testing');
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
});