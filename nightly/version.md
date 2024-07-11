commit 011815b8cdd8318d61e61e68cb571fd09a40f2b2
Author: Nayden Naydenov <31909318+nnaydenow@users.noreply.github.com>
Date:   Wed Jul 10 13:28:48 2024 +0300

    fix(ui5-table): correct announced row count (#9442)
    
    Table row added for loading more functionality was read out by the screen readers. With this PR, the row is excluded from the accessibility tree.
    
    Fixes: https://github.com/SAP/ui5-webcomponents/issues/9243
