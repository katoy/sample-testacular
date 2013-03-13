assert = chai.assert

describe "Hello!",  ->
  it "returns helloWorld()", ->
    assert.equal HelloX.helloWorld(), "Hello!"

  it "returns say('foo')", ->
    assert.equal HelloX.say("foo"), "Hi, foo"
