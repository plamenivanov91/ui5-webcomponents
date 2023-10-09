commit 6983f71acdaf3f94215d0fb86d9558db5b0b2887
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Mon Oct 9 14:08:43 2023 +0300

    feat(ui5-color-palette-item): add selected state (#7598)
    
    We are introducing a *selected* property to the *<ui5-color-palette-item>*.
    This enhancement allows users to explicitly set a *selected state* to any *<ui5-color-palette-item>*.
    For example, previously the first item was always on focus when opening the *<ui5-color-palette-popover>*.
    Additionally, when one item is *selected*, any previously selected item will be deselected, ensuring that only one item can be selected within a *<ui5-color-palette>* at any given time.
    The selected state could be set either by:
    - Setting it explicitly by using the *selected* property;
    - By right-clicking on a <ui5-color-palette-item> with the mouse;
    - By pressing Enter or Space upon focused <ui5-color-palette-item>;
