commit 371c547676ed71582dc6ff64a2a1b1181dd9bf9d
Author: kskondov <konstantin.kondov@sap.com>
Date:   Mon Sep 16 11:09:55 2024 +0300

    fix(ui5-popover): correct opacity (#9839)
    
    The background of the modal popover was black which made the context page not visible.
    So opacity was added to grey out the background
    
    Fixes: #9823
