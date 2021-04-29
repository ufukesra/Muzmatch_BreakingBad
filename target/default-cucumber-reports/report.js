$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/characters.feature");
formatter.feature({
  "name": "Characters of Breaking Bad",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@feature"
    }
  ]
});
formatter.scenario({
  "name": "As a user I would like to see all characters in Breaking Bad",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@feature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "send a get request to characters Endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "CharactersStepDef.send_a_get_request_to_characters_Endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the size of characters is 62",
  "keyword": "Then "
});
formatter.match({
  "location": "CharactersStepDef.verify_the_size_of_characters_is(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a DEA staff I want to make sure Walter White is Heisenberg",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@feature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "send a get request to characters Endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "CharactersStepDef.send_a_get_request_to_characters_Endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify nickname of \"Walter White\" is \"Heisenberg\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CharactersStepDef.verify_nickname_of_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I shouldn\u0027t send a request to invalid endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@feature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "send a request to invalid endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "CharactersStepDef.send_a_request_to_invalid_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify status code 400",
  "keyword": "Then "
});
formatter.match({
  "location": "CharactersStepDef.verify_status_code(Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:645)\n\tat org.junit.Assert.assertEquals(Assert.java:631)\n\tat endpoints.Characters.verifyWithStatusCode(Characters.java:59)\n\tat step_def.CharactersStepDef.verify_status_code(CharactersStepDef.java:31)\n\tat ✽.verify status code 400(file:src/test/resources/features/characters.feature:15)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/episodes.feature");
formatter.feature({
  "name": "Episodes for all seasons",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@episode"
    }
  ]
});
formatter.scenario({
  "name": "As a user I want to see how many episodes are there in each season",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@episode"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "send a get request to episode endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "EpisodesStepDef.send_a_get_request_to_episode_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify episodes for each season",
  "rows": [
    {
      "cells": [
        "1",
        "16"
      ]
    },
    {
      "cells": [
        "2",
        "23"
      ]
    },
    {
      "cells": [
        "3",
        "23"
      ]
    },
    {
      "cells": [
        "4",
        "23"
      ]
    },
    {
      "cells": [
        "5",
        "16"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EpisodesStepDef.verify_episodes_for_each_season(Integer,Integer\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user I shouldn\u0027t send a request to invalid endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@episode"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "send a request to invalid endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "CharactersStepDef.send_a_request_to_invalid_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify status code 400",
  "keyword": "Then "
});
formatter.match({
  "location": "CharactersStepDef.verify_status_code(Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:645)\n\tat org.junit.Assert.assertEquals(Assert.java:631)\n\tat endpoints.Characters.verifyWithStatusCode(Characters.java:59)\n\tat step_def.CharactersStepDef.verify_status_code(CharactersStepDef.java:31)\n\tat ✽.verify status code 400(file:src/test/resources/features/episodes.feature:18)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});