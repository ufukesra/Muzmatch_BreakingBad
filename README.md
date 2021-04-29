Full Name : Ufuk Sahinduran

Project Title : Breaking Bad API testing framework for Muzmatch

Installation guide: This is a maven project. so It's assumed that the host running this code have Java and maven
installed and JAVA_HOME already set. Here is the guide for maven installation just in
link : https://maven.apache.org/install.html Project get all dependencies from maven repository.
So no additional installation needed.


                       API Testing:

Endpoints Package:
    Characters class: wrote methods and created variables for character endpoint tests.
    Episodes class: wrote methods and created variables for episode endpoint tests.

Runner Package:
    CukesRunner class: This class is for running my test by using cucumber options which contains
        plugins(cucumber reports) feature file pathway, step definitions pathway and dryRun.

Step Def Package:
        Hook class: this class is for running before and after each and every scenario.
            I have added scenario names, base Url in before method and  reset RestAssured in after method.
        CharactersStepDef class:  This class contains object of Characters class in order to use instance methods from
            the class.It is for running characters scenarios' test steps.
        EpisodesStepDef class :This class contains object of Episodes class in order to use instance methods from
            the class.It is for running episodes scenarios' test steps.

Utilities Package:
    ConfigurationReader class: this class is for reading data from Config file.  

resources: this directory is for storing feature file which contains my scenarios.
Scenarios: created based on BDD by using Gherkin syntax

configuration.properties: This is the file that I stored base Url.

pom.xml:
    Below are the dependencies are being used for this project :
    Cucumber Java, Cucumber JUnit, RestAssured library, cucumber reports plugins.


Scenarios:
    Characters: 1-Testing to all characters in movie and verify by size of characters
                2-Testing and verifying characters by using nickname
                3-Testing and verifying endPoints by using status code

    Episodes:1-Testing and verifying how episodes for each and every season
             2-Testing and verifying endPoints by using status code


Notes: On Invalid Endpoint tests scenarios my tests are failed because of the wrong status code;
    Expected Status code: 404(Not Found)
    Actual Status Code: 200 (Ok)