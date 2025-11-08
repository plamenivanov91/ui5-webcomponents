commit ddbb8d4bed6a75d661a994c8d5737654a7a62e9c
Author: Konstantin Gogov <konstantin.gogov@sap.com>
Date:   Fri Nov 7 10:55:40 2025 +0200

    fix(ui5-dynamic-page-title): correct ARIA attribute handling for non-interactive titles (#12598)
    
    When the DynamicPageTitle is non-interactive, the ARIA labelledby attribute
    should not reference any heading elements. This change ensures that the
    _ariaLabelledBy getter returns undefined when the title is not interactive,
    preventing potential accessibility issues.
    
    Fixes: #12466
