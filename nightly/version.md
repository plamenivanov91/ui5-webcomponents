commit 88b6eac7237ca846334532364d5d73451f1dc6ec
Author: Nikolay Hristov <n.hristov@sap.com>
Date:   Tue Jul 22 09:28:34 2025 +0300

    feat(ui5-menu): improve accessibility (#11846)
    
    This PR introduces the following accessibility improvements in ui5-menu component:
    
    Adds aria-label attributes on menu item group wrappers, which already have role="group". The labels are according to the group's checkMode property.
    
    Adds the possibility to check/uncheck menu items in groups when the checkMode property is set to Single or Multiple. This is achieved by holding down the Shift key while selecting (with mouse or keyboard) the menu items in these groups. Selecting menu items that don't belong to any group, or items inside groups with the checkMode property set to None will always close the menu regardless if Shift is pressed or not.
    
    Fixes: #11594
