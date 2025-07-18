commit 9b6b625d243ae13bd113cb2e8a6f0ca6c59229e3
Author: Nikolay Hristov <n.hristov@sap.com>
Date:   Thu Jul 17 09:47:20 2025 +0300

    fix(ui5-button): adjust button badge z-index (#11930)
    
    The `z-index` property of the slotted `ui5-button-badge` inside of the `ui5-button` is set to **1000** - this value is very high and it happens that badge can appear over other elements that appear on higher `z-index` (as dialogs, etc.).
    
    This PR sets the `z-index` to **1**, which is more secure options and doesn't destroy current badge appearance.
