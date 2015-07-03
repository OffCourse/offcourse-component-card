require './helpers'
describe "Card Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = [
      "offcourse-component-card-content"
      "offcourse-component-card-nav"
    ]
    { @Component, @spy } = mockModule moduleUnderTest, mockModules

  afterAll -> disableMocks()

  Given -> 
    testdom "<html><body></body></html>"
    @model = { bar: "bar" }
    @schema = { main: ["baz"]}
    @context = "main"
    @children = "qux"
  
  When  -> @subject  = renderElement @Component, { @schema, @model, @context, @children }
  Then  -> @classes = @subject.className.split ' '
  And   -> @classes.includes "card"
  And   -> @classes.includes "card-main"
  And   ->
    args = { @model, schema: @schema[@context] }
    expect(@spy.getCall(0).args[0]).to.deep.equal(args)
  And   ->
    args = { @children }
    expect(@spy.getCall(1).args[0]).to.deep.equal(args)
