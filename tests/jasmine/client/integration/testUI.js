
describe("Heading", function() {
  it("Check Test App text", function() {
    expect($('h1').text()).toEqual('Test App');
  });
});

describe('Addition', function () {
    it('adds two numbers together', function () {
        expect(1 + 1).toEqual(3);
    });
});