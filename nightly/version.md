commit a95ef11885b8c4ac592a55c15c27ad55328f77c6
Author: Nikoleta Ivanova <31706628+nikoletavnv@users.noreply.github.com>
Date:   Mon Aug 12 10:05:27 2024 +0300

    fix(ui5-input): properly change numeric input value using the arrow keys (#9616)
    
    * fix(ui5-input): properly change numeric input value using the arrow keys
    
    Fire input event when user uses the arrow keys to increase or decrease the value of a numeric input
    
    Fixes #9588
