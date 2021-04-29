package step_def;

import io.cucumber.java.en.*;
import endpoints.Characters;

public class CharactersStepDef {
    Characters ch = new Characters();
    @Given("send a get request to characters Endpoint")
    public void send_a_get_request_to_characters_Endpoint() {
        ch.getAllCharacters();
    }

    @Then("verify the size of characters is {int}")
    public void verify_the_size_of_characters_is(Integer size) {
        ch.verifyCharactersWithSize(size);
    }

    @Then("verify nickname of {string} is {string}")
    public void verify_nickname_of_is(String name, String nickname) {
        ch.whoIsHeisenberg(name, nickname);
    }

    @Given("send a request to invalid endpoint")
    public void send_a_request_to_invalid_endpoint() {

        ch.sendRequestToInvalidEndpoint();
    }

    @Then("verify status code {int}")
    public void verify_status_code(Integer statusCode) {
        ch.verifyWithStatusCode(statusCode);
    }


}
