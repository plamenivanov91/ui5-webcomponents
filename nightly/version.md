commit 55c9e4d67800d82a0d357eda8859b78d69dc25ab
Author: Nikolay Hristov <n.hristov@sap.com>
Date:   Fri Dec 20 11:05:02 2024 +0200

    feat(ui5-ai-button): implement split button functionality (#10242)
    
    There is a request for redesign/refactoring of AI Button `ui5-ai-button` in order to use `ui5-split-button` instead of `ui5-button` which will allow app developers to define default action on pressing of AI button and opening an additional menu in some cases.
    
    ![image](https://github.com/user-attachments/assets/380a7c01-834f-4adb-af0a-2ccd4ffb09cb)
    
    There is new property `splitMode` introduced in `ui5-button-state` component that activates split button mode for specific state.
