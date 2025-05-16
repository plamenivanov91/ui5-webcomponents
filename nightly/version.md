commit e46b867f77412ff2a4b57a025dda13799bc9ac16
Author: Nikola Anachkov <87311182+NakataCode@users.noreply.github.com>
Date:   Thu May 15 14:15:49 2025 +0200

    fix(ui5-list): adjust observer to handle sticky headers (#11526)
    
    Problem:
    The list's onLoadMore event is not triggered in Firefox at certain zoom levels when a sticky header is present. This is due to how Firefox calculates intersections with sticky positioned elements, causing subpixel rendering issues.
    
    Solution:
    Use the proper scroll container as the root for the IntersectionObserver and add a rootMargin of 5px.
    
    Similar to: #11242
    Fixes: #11461
