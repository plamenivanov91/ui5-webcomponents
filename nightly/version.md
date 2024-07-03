commit ea145c0d4ceb80e6eecfcf9bc0a679aebc6f633a
Author: Nayden Naydenov <31909318+nnaydenow@users.noreply.github.com>
Date:   Tue Jul 2 14:27:08 2024 +0300

    refactor: remove cloned property from slot decorator (#9349)
    
    The `cloned` field of `@slot` decorator was introduced to invalidate component slot content was cloned to static area. https://github.com/SAP/ui5-webcomponents/pull/7882
    
    Now, when the Popover API is integrated in all of the components, the field is obsolete.
