package step_def;

import io.cucumber.java.en.*;
import endpoints.Episodes;

import java.util.Map;

public class EpisodesStepDef {

    Episodes ep = new Episodes();


    @Given("send a get request to episode endpoint")
    public void send_a_get_request_to_episode_endpoint() {

        ep.getAllEpisodes();
    }

    @Then("verify episodes for each season")
    public void verify_episodes_for_each_season(Map<Integer, Integer> episodes) {

        ep.verifyEpisodesForEachSeason(episodes);
    }

}
