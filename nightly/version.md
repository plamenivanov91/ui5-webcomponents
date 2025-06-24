commit 8c3cba9681136c70c81d8c8cf09e0a588a025a9a
Author: Dobrin Dimchev <dobrin.dimchev@sap.com>
Date:   Mon Jun 23 10:34:43 2025 +0300

    fix(ui5-shellbar): correct search visibility toggle (#11724)
    
    This PR fixes an issue where "delayed" search fields weren’t supported. Instead of attaching events to the search field, in just the onEnterDOM hook they’re now attached refreshed in the the ShellBar's onBeforeRendering hook. A validation check is also added in every handler to ensure that shellbar is not' reacting on already removed search fields. This change improves event handling and adds a test for dynamic search fields.
