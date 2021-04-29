@episode

  Feature: Episodes for all seasons
    Scenario: As a user I want to see how many episodes are there in each season
      Given send a get request to episode endpoint
      Then verify episodes for each season

      #| season| episode count|
      | 1| 16|
      | 2| 23|
      | 3| 23|
      | 4| 23|
      | 5| 16|


    Scenario: As a user I shouldn't send a request to invalid endpoint
      Given send a request to invalid endpoint
      Then verify status code 400
