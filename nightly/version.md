commit e1c152cbec16a47dd42e9813c68c0052828d6cdf
Author: Plamen Ivanov <plamen.ivanov01@sap.com>
Date:   Thu Mar 20 13:42:47 2025 +0100

    fix(ui5-tree): noDataText is now properly rendered (#11095)
    
    There was a problem where noDataText wasn't rendered even if there are no tree items in the tree. This is because there was a an internal element counted as a child of the tree in its tsx template.
    
    With this fix, the noDataText is now properly rendered when there are no tree items in the tree.
    
    Fixes: #11073
