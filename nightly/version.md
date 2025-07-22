commit 87412b58eab6a01969f7a9ef1dd5d6c4563b647f
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Mon Jul 21 17:33:18 2025 +0300

    fix(ui5-timeline): apply correct accessibility semantics (#11774)
    
    We've now set correct tree/list roles on the Timeline based on conditions:
    
    If a ui5-timeline has ui5-timeline-group-item – the role is set to tree so we oblige with the latest accessibility standards.
    When we have a ui5-timeline with only ui5-timeline-items – the role is set to list.
    Depending on the role, the correct treeitem/listitem roles are set to the items within.
    Using a Screen Reader now announces the counting information natively due to correct semantics (e.g Timeline item 2 of 4).
    
    Added region="Timeline" to the root of the Component according to spec.
