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
    @components = { baz: "matazz" }
    @handlers = { qux: "flux" }
    @context = "main"
    @stub = @spy.prototype.partition = sinon.stub().returns([1,2,3]) 

  describe "normal schema", ->
    When  ->
      props = { @model, @schema, @context, @components, @handlers }
      @subject  = renderElement @Component, props 
    Then  ->
      classes = @subject.className.split ' '
      classes.includes "card"
      classes.includes "card-main"
    And   ->
      expect(@stub.getCall(0).args).to.deep.equal([@schema, @model, @components, @handlers])
    And   ->
      expect(@spy.getCall(1).args[0]).to.deep.equal({section: 1})
