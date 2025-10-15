commit 68e6a3e43eaad261414a68d18ab8dfac37a2124b
Author: Boyan Rakilovski <boyan.rakilovski@sap.com>
Date:   Tue Oct 14 13:10:15 2025 +0300

    fix(ui5-button): prioritize accessibleName over button text in aria-label (#12473)
    
    When both text content and accessibleName are provided, the aria-label
    should use only the accessibleName value plus button type text,
    not concatenate both text content and accessibleName.
    
    Fixes #12398
