var chai = require('chai');

var assert = chai.assert;


var myFunc = function(a, b){
  return a + b;
};

describe('テストのタイトル', function () {

  it('myFnucのテスト', function(){
    assert.strictEqual(myFunc(1,2),3)
  });

  var result = myFunc(3,3);

  it('myFuncのテスト', function () {
    assert.strictEqual(result, 6)
  });
});
