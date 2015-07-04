require './helpers'
describe "Card Component", ->


  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = [
      "offcourse-component-card-header"
      "offcourse-component-card-content"
      "offcourse-component-card-footer"
    ]
    { @Component, @spy } = mockModule moduleUnderTest, mockModules

  afterAll -> disableMocks()

  Given -> 
    testdom "<html><body></body></html>"
    @model = { bar: "bar" }
    @schema = ["baz"]
    @context = "main"

  describe "normal schema", ->
    When  ->
      @subject  = renderElement @Component, { @schema, @model, @context }
    Then  ->
      classes = @subject.className.split ' '
      classes.includes "card"
      classes.includes "card-main"
    And   ->
      cardContentProps = @spy.getCall(0).args[0]
      props = { @model, @schema }
      expect(cardContentProps).to.deep.equal(props)

  # resetting the spy at the beginning of a given blog is subpar
  # unfortunately this is an open issue in mocha gwt...
  # will try to do a PR otherwise, maybe switch to mocha-given...
  
  describe "nested schema", ->
    Given ->
      @spy.reset()
      @schema = { main: ["baz"] }
    When  ->
      @subject  = renderElement @Component, { @schema, @model, @context }
    Then  ->
      cardContentProps = @spy.getCall(0).args[0]
      props = { @model, schema: @schema[@context] }
      expect(cardContentProps).to.deep.equal(props)

  describe "only child is a header image", ->
    Given ->
      @spy.reset()
      @children = "qux" 
    When  ->
      @subject  = renderElement @Component, { @schema, @model, @context, @children }
    And   ->
      cardHeaderProps = @spy.getCall(0).args[0]
      props = { image: @children }
      expect(cardHeaderProps).to.deep.equal(props)
    And  ->
      cardContentProps = @spy.getCall(1).args[0]
      props = { @model, @schema }
      expect(cardContentProps).to.deep.equal(props)

  describe "first child is a header image, others are nav buttons", ->
    Given -> 
      @spy.reset()
      @children = ["qux", "baoz", "bazo"]
    When  ->
      @subject  = renderElement @Component, { @schema, @model, @context, @children }
    And   ->
      cardHeaderProps = @spy.getCall(0).args[0]
      props = { image: @children[0] }
      expect(cardHeaderProps).to.deep.equal(props)
    And  ->
      cardContentProps = @spy.getCall(1).args[0]
      props = { @model, @schema }
      expect(cardContentProps).to.deep.equal(props)
    And   ->
      cardFooterProps = @spy.getCall(2).args[0]
      props = { buttons: [@children[1], @children[2]] }
      expect(cardFooterProps).to.deep.equal(props)
