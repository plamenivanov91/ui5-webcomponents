commit 02059bc4a01536fa27e37a578ab6eb1499a016ee
Author: Plamen Ivanov <plamen.ivanov01@sap.com>
Date:   Tue Jul 16 13:42:29 2024 +0300

    fix(ui5-select): prevent unnecessary change event (#9489)
    
    Fixed a problem where if the select dropdown is closed and we are on
    the last item, when we press arrow down, a change event is unnecessarily
    fired without any change actually happening.
