commit aa91fd136f8bff757d476b83444f963d4299d562
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Wed Apr 12 13:25:53 2023 +0300

    feat(localization): add `timezone` support [experimental] (#6857)
    
    The PR is part of a bigger story to Add support for Timezones in the localization package
    - updates to latest `"@openui5/sap.ui.core": "1.112.0"` and `"@types/openui5": "^1.112.0"`
    - includes a new module `sap/ui/core/date/UI5Date.js` from "@openui5/sap.ui.core" in the `localization` package.
    - uses the `sap/ui/core/date/UI5Date.js` module in localization package instead of `new Date()`
    - adds a private `timezone` config setting that is now used when configured, otherwise the local browser timezone is used as before
    - updates the `OpenUI5Support` module to reuse the `timezone` from the OpenUI5 configuration , if present.
    
    Fixes: https://github.com/SAP/ui5-webcomponents/issues/6851
