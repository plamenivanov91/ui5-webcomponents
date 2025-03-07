commit 8ad378d64e075068cf85f5e6ef6184cdafd9fc0f
Author: Nikola Anachkov <87311182+NakataCode@users.noreply.github.com>
Date:   Thu Mar 6 10:30:04 2025 +0200

    fix(ui5-toolbar-button): add hidden property (#10915)
    
    - The ToolbarButton component had no hidden property implemented, which meant that buttons could not be dynamically shown or hidden after the initial render.
    
    Fixes: #10585
