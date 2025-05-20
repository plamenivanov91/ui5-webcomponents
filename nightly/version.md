commit 93066c6036360c0c28262586bce138ff9ceb5bc5
Author: Konstantin Gogov <konstantin.gogov@sap.com>
Date:   Mon May 19 09:58:35 2025 +0300

    fix(ui5-li-custom): correct padding for ListItemCustom (#11487)
    
    Increase the specificity of selection mode padding rules by including
    [wrapping-type] in the selectors, ensuring they override the generic
    [wrapping-type="None"][description] padding rule. Remove unnecessary
    [ui5-li] and [ui5-li-custom] selectors to prevent CSS leakage and
    unnecessary bundling.
