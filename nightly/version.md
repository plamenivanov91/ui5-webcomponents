commit aa58291abd89c20c00822c2d78bed16dc32251ee
Author: Nikola Anachkov <87311182+NakataCode@users.noreply.github.com>
Date:   Tue Feb 4 14:16:32 2025 +0200

    fix(ui5-flexible-column-layout): adjust grip minimum target size (#10743)
    
    - Problem:
    The grip did not meet the minimum target size requirements.
    
    - Solution:
    Add a container div around the grip icon to control the minimum target size, setting it to 1.5rem width and 2rem height.
    
    - Explanation:
    Restructured the grip to handle width and height at the div level instead of the icon because the .ui5-icon-root class (which gets automatically applied to icons) sets width and height to 100%. Applying the dimensions directly to the icon would cause it to stretch and fill the entire available space, distorting its proportions.
    
    Fixes: #10669
