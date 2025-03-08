commit 0662fc2c87df0a92f14a2cfe463d6bae1ae3f598
Author: Dobrin Dimchev <dobrin.dimchev@sap.com>
Date:   Fri Mar 7 02:38:27 2025 -0800

    fix(ui5-icon): revert default mode to decorative (#10969)
    
    Fixes: #10835
    
    With v2 the default mode was changed to "Image" unintentionally, which results in many app reports for icons with no labels.
