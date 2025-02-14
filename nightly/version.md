commit ca74d1368a3df589cad7ba916939434646ca3be5
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Thu Feb 13 16:35:44 2025 +0200

    refactor(ui5-select): stop  bubbling of the `open` event (#10831)
    
    Stop bubbling of the open event as it causes issues when the Select is used inside Dialog.
    It's likely for consumers to listen for the Select's open on the Select level, not on a parent of the Select.
    
    Fixes: #10422
