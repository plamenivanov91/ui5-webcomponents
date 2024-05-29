commit 3e2b32e9e34812e1258ec8dbcf3b23260b803bb6
Author: Nikoleta Ivanova <31706628+nikoletavnv@users.noreply.github.com>
Date:   Tue May 28 15:02:51 2024 +0300

    refactor(ui5-input): replace openPicker method with public property open (#8950)
    
    * refactor(ui5-input): replace openPicker method with public property open
    
    BREAKING CHANGE: Remove openPicker method and replace it with public property open
    
    Before the ui5-input suggestions popover could be opened by calling `openPicker()` :
    ```js
    const input = document.getElementById("exampleID");
    input.openPicker();
    ```
    
    Now the suggestions popover is opened by setting the `open` property to true:
    ```js
    const input = document.getElementById("exampleID");
    input.open = true;
    ```
    
    * refactor(ui5-input): fix spacing in input.mobile.spec.js
