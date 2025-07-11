commit 1c38b603987bb48e511eadbaa095574bc2b17fe3
Author: Nikolay Deshev <nikolay.deshev@sap.com>
Date:   Thu Jul 10 11:14:34 2025 +0300

    fix(ui5-tokenizer): sync popover list items with token text changes (#11854)
    
    * fix(ui5-tokenizer): sync popover list items with token text changes
    
    - add invalidateOnChildChange config to tokens slot to watch for text property changes
    to ensure popover list items automatically update when token text is modified
    
    - use the StandardListItem 'text' property instead of slot to ensure correct text rendering in popover list items
