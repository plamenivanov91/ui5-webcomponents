commit 1e693fd5b1fc80a5eb7b82a43cf34bd33eccb9fb
Author: Tsanislav Gatev <tsanislav.gatev@sap.com>
Date:   Wed Jan 29 16:32:46 2025 +0200

    feat(ui5-button): add badge to ui5-button (#10642)
    
    Implementing the badge concept in the`ui5-button` component.
    
    How to use:
    
    ```HTML
    <ui5-button design="Emphasized" icon="employee">Notifications
           <ui5-button-badge design="OverlayText" text="999+" slot="badge"></ui5-button-badge>
    </ui5-button>
    ```
    
    The badge in `ui5-button` provides 3 designs: `InlineText`, `OverlayText` and `AttentionDot` looking like:
    ![Screenshot 2025-01-28 at 13 51 00](https://github.com/user-attachments/assets/49d87380-fde1-472d-86a0-d2ccdcace6ad)
    
    fixes: https://github.com/SAP/ui5-webcomponents/issues/10683
