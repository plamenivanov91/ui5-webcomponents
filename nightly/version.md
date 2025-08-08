commit b392d46c349c9e884f54c1a95c506abd8734d514
Author: Konstantin Gogov <konstantin.gogov@sap.com>
Date:   Thu Aug 7 16:55:32 2025 +0300

    fix(ui5-dynamic-page): correct pin button tooltip based on pinned state (#12086)
    
    The pin button tooltip now correctly displays:
    - "Pin Header" when header is not pinned
    - "Unpin Header" when header is pinned
    
    Previously, the tooltip always showed "Pin Header" regardless
    of the current pinned state, which was confusing for users.
    
    Fixes: #12064
