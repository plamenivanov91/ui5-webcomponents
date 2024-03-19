commit c66ddd506c4836be5ee7e5550b1d5928fb354b12
Author: Konstantin Gogov <68374332+kgogov@users.noreply.github.com>
Date:   Tue Mar 19 12:03:11 2024 +0200

    feat(ui5-avatar): update focus handling (#8420)
    
    * feat(ui5-avatar): update focus handling
    
    Adjusted ui5-avatar focus display rules. On desktop, focus outline is
    always visible. For mobile, focus outline only appears with an external
    keyboard, it remains hidden for touch focus.
