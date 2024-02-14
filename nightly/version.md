commit 7f46b0b9a6f91b52f466b0c617d6ece9a541e950
Author: Plamen Ivanov <plamen.ivanov01@sap.com>
Date:   Tue Feb 13 15:43:27 2024 +0200

    feat(ui5-rating-indicator): introduced "remaining-bar" CSS part (#8276)
    
    The part can be used like this to alter the end points' size.
    
    ```
    [ui5-progress-indicator]::part(remaining-bar)::before,
    [ui5-progress-indicator]::part(remaining-bar)::after {
            width: 0.375rem;
            height: 0.375rem;
    }
    ```
    
    Related to: #8213
