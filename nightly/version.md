commit 143ecef245271095a9840d2e15740031dbbda2df
Author: Dobrin Dimchev <dobrin.dimchev@sap.com>
Date:   Wed May 22 11:40:17 2024 +0300

    refactor(ui5-li): introduce template for better inheritance of ListItemBase (#9015)
    
    Refactor ListItem / ListItemBase structure to make it easier to extend. Now, ListItemBase is extended by Option, CustomOption, and ListItem. In the future. It might be extended by other components in future.
