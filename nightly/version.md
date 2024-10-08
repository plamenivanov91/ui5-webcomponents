commit f7ae10e105c2eb36c4dfc153e96fd688e3d76f38
Author: Plamen Ivanov <plamen.ivanov01@sap.com>
Date:   Mon Oct 7 15:06:14 2024 +0300

    fix(ui5-list): growing button loading aligned with visual spec (#9977)
    
    The new visual spec mandates that when we have growing with button
    there shouldn't be busy indicator overlay on top of the whole list
    but a small one next to "More" text without blocking the rest of the
    list.
