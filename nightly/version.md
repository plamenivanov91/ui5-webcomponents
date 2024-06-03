commit 1924b5457f22c428527f8be3fbdd46d9d5d7ffed
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Mon Jun 3 09:57:17 2024 +0300

    refactor(ui5-link): wrap text by default (#9006)
    
    The text of `ui5-link` now wraps by default.
    
    BREAKING CHANGE: `wrapping-type` property default value has changed from `None` to `Normal`.
    Before:
    ```html
    <ui5-link>some very very very long link</ui5-link> <!-- would truncate the text if there is not enough space -->
    ```
    
    Now:
    ```html
    <ui5-link>some very very very long link</ui5-link> <!-- would let the text wrap if there is not enough space -->
    ```
