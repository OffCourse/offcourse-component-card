require './helpers'
describe "Card Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = [
      "offcourse-component-card-content"
    ]
    { @Component, @spy } = mockModule moduleUnderTest, mockModules

  afterAll  -> disableMocks()

  Given -> 
    testdom "<html><body></body></html>"
    @model = { bar: "bar" }
    @schema = ["baz"]
    @context = "card"
  
  When  -> @subject  = renderElement @Component, { @schema, @model }
  Then  ->
    classes = @subject.className.split ' '
    classes.includes "card"
  And   ->
    args = { @model, @schema, @context }
    expect(@spy.getCall(0).args[0]).to.deep.equal(args)
