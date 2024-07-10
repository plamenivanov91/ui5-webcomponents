commit 9cc7aeb3baa927518f9cb4eea10698e6297b58a8
Author: Nayden Naydenov <31909318+nnaydenow@users.noreply.github.com>
Date:   Tue Jul 9 17:12:54 2024 +0300

    fix(ui5-table): correct font weight (#9417)
    
    "72-SemiboldDuplex", "72-SemiboldDuplexfull" fonts look broken in Safari browser when its font weight is set to bold.
    ![image](https://github.com/SAP/ui5-webcomponents/assets/31909318/8b927aea-da58-4a73-916b-5ce8dd8ff91e)
    
    With this the specification of `ui5-table-column` was updated and now, the column's font weight should be set to normal. With this PR the styles are align to the specification.
    
    Related to: #9046
