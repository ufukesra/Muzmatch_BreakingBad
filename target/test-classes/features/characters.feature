@feature

  Feature: Characters of Breaking Bad
    Scenario: As a user I would like to see all characters in Breaking Bad
      Given send a get request to characters Endpoint
      Then verify the size of characters is 62

    Scenario: As a DEA staff I want to make sure Walter White is Heisenberg
      Given send a get request to characters Endpoint
      Then verify nickname of "Walter White" is "Heisenberg"


    Scenario: As a user I shouldn't send a request to invalid endpoint
      Given send a request to invalid endpoint
      Then verify status code 400