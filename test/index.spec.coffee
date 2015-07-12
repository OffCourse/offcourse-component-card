require './helpers'
describe "Card Component", ->


  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = [
      "offcourse-helpers-card-component"
      "offcourse-component-card-section"
    ]
    { @Component, @spy } = mockModule moduleUnderTest, mockModules

  afterAll -> disableMocks()

  Given -> 
    testdom "<html><body></body></html>"
    @schema = ["foo", "bar", {"baz": ["qux", "flux"]}]
    @model = { foo: "foo", qux: "flux", flux: "qux" }
    @context = "main"
    @stub = @spy.prototype.partition = sinon.stub().returns([1,2,3]) 

  describe "normal schema", ->
    When  ->
      @subject  = renderElement @Component, { @model, @schema, @context }
    Then  ->
      classes = @subject.className.split ' '
      classes.includes "card"
      classes.includes "card-main"
    And   ->
      expect(@stub.getCall(0).args).to.deep.equal([@schema, @model])
    And   ->
      expect(@spy.getCall(1).args[0]).to.deep.equal({section: 1})
