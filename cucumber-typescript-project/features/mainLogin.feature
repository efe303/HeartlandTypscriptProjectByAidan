Feature: To search item in My Logo webpage

@CucumberScenario
Scenario: Log into My Logo webpage as a user
    Given User is in MyStore main page
    When User search a product from the input box and clicks on search button
    And user selects a size and a color, add it to the chard
    Then User should be able to see item is visible in the cart
