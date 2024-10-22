commit 56ad3115affe17f453a30ac0880ac879dbbd763b
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Mon Oct 21 10:08:10 2024 +0300

    feat(ui5-filter-item, ui5-sort-item,..): add selected `filterItems` to `ui5-confirm` event details (#9838)
    
    We are now providing the slotted ui5-filter-item's in the ui5-confirm event details.
    This way the app developers could be able to selectively filter the selected items by property of their liking (for example by adding data-key (or similar) attribute/property to the ui5-filter-item-option's or ui5-filter-item's);
