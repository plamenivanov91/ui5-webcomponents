commit a8e8dd1bf9b21448a3e2fa991704522d1a3bc6c1
Author: Iliana Bobeva <iliana.bobeva@sap.com>
Date:   Fri Aug 15 15:42:46 2025 +0300

    fix(ui5-checkbox): fix focus spacing (#12100)
    
    According to the updated VD spec for checkbox, its focus needs to be
    0.25rem outside of the component in both compact and cozy mode.
    
    Addtionally:
    - focus border radius on HC themes is fixed, there is not rounding.
    
    JIRA: BGSOFUIPIRIN-6883
