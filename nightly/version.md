commit 972e6dba29d0966bcf3f4136be67114571a69745
Author: Dobrin Dimchev <dobrin.dimchev@sap.com>
Date:   Thu Sep 18 15:56:05 2025 +0300

    fix(ui5-select): announce header text on mobile (#11849)
    
    Summary
    Fixes mobile accessibility issues for the Select component.
    
    Changes
    
    - Sets accessibleName on ResponsivePopover so screen readers announce the header text on mobile.
    - Improves focus handling for selected options in the popover.
    - Adds tests covering mobile and desktop scenarios.
