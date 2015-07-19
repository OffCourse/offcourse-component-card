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
    @schema = ["foo"]
    @model = { bar: "beque" }
    @context = "main"
    @stub = @spy.prototype.partition = sinon.stub().returns([{foo: 1}, {foo: 2}]) 

  describe "normal schema", ->
    When  ->
      props = { @model, @schema, @context }
      @subject  = renderElement @Component, props 
    Then  ->
      classes = @subject.className.split ' '
      classes.includes "card"
      classes.includes "card-main"
    And   ->
      expect(@stub.getCall(0).args).to.deep.equal([@schema, @model])
    And   ->
      expect(@spy.getCall(1).args[0]).to.deep.equal({foo: 1})
      expect(@spy.getCall(2).args[0]).to.deep.equal({foo: 2})
