commit 374d4d82239f1309231c8516c20be8c160e81e40
Author: Nayden Naydenov <31909318+nnaydenow@users.noreply.github.com>
Date:   Mon Jan 6 10:37:37 2025 +0200

    fix(f6navigation): skip hidden elements (#10325)
    
    F6 navigation was finding hidden elements, and this was stopping the navigation between groups.
    
    Fixes: #10236
