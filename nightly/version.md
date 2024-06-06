commit b8d7bac56c783825cf9354e020730e0d6a87a2b4
Author: Georgieva <lidiya.georgieva@sap.com>
Date:   Wed Jun 5 13:27:02 2024 +0300

    refactor(ui5-radio-button): wrap text by default (#9117)
    
    * refactor(ui5-radio-button): wrap text by default
    
    The text of `ui5-radio-button` now wraps by default.
    
    BREAKING CHANGE: `wrapping-type` property default value has changed from `None` to `Normal`.
    Before:
    ```html
    <ui5-radio-button text="Option A with long long text"></ui5-radio-button>
    <!-- would truncate the text if there is not enough space -->
    ```
    
    Now:
    ```html
    <ui5-radio-button text="Option A with long long text"></ui5-radio-button>
    <!-- would let the text wrap if there is not enough space -->
    ```
    
    Related to https://github.com/SAP/ui5-webcomponents/issues/8461
