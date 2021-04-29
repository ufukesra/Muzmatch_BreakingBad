package endpoints;

import static io.restassured.RestAssured.*;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Episodes {

    String episodesEndPoint = "/episodes";
    Response response;


    public void getAllEpisodes(){

        response =
                given().
                        contentType(ContentType.JSON).
                when().
                        get(episodesEndPoint);

        Assert.assertEquals(200,response.statusCode());

    }


    public void verifyEpisodesForEachSeason(Map<Integer, Integer> allEpisodes){
        List seasons= new ArrayList<>();
        List episodes= new ArrayList<>();

        List<String> episodesCount =response.jsonPath().getList("season");

        for (int season:allEpisodes.keySet()) {

            seasons.add(season);
        }

        for (int episode:allEpisodes.values()) {
        episodes.add(episode);
        }




        for (int i = 0; i <seasons.size() ; i++) {
            int count =0;
            Assert.assertEquals(seasons.get(i),(i+1));
            for (int j = 0; j <episodesCount.size() ; j++) {
                if (episodesCount.get(j).equals(String.valueOf(seasons.get(i)))){
                    count++;
                }
            }
            Assert.assertEquals(episodes.get(i),count);
        }



    }
}
