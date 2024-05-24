Feature: Demo feature
Scenario Outline: Run demo feature

Given Google page is opened
When Search with <SearchItem>
Then Click on the search result
Then Url should match <ExpectedURL>

Examples:
    | TestID     |SearchItem |ExpectedURL               |
    | DEMO_TC001 |WDIO       |https://webdriver.io/     |
