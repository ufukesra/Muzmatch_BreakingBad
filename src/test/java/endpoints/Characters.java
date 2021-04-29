package endpoints;

import static io.restassured.RestAssured.*;

import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.util.List;

import static org.junit.Assert.*;

public class Characters {

    String charactersEndpoint= "/characters";
    int characterSize=0;
    Response response;

    public void getAllCharacters(){

        response =
                given().
                        contentType(ContentType.JSON).
                when().
                        get(charactersEndpoint);


        List<String> names = response.jsonPath().getList("name");
        characterSize=names.size();
        System.out.println(names.toString());


        assertEquals(200,response.statusCode());
    }
    public void verifyCharactersWithSize(int size){
       assertEquals(size,characterSize);
    }


    public void whoIsHeisenberg(String name, String nickname){
        String actualName= response.jsonPath().getString("name[0]");
        String actualNickname= response.jsonPath().getString("nickname[0]");

        assertEquals("Verifying name",name,actualName);
        assertEquals("Verifying nickname which belongs to name",nickname,actualNickname);

    }


    public void sendRequestToInvalidEndpoint(){

        response =
                given().
                        contentType(ContentType.JSON).log().all().
                        when().
                        get("invalidEndPoint").prettyPeek();
    }

    public void verifyWithStatusCode(int statusCode){
        assertEquals(statusCode, response.statusCode());
    }


}
