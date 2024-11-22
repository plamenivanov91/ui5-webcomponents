commit 7059e0987960f62cd5b8740594b907fa98e1f11c
Author: Nikola Anachkov <87311182+NakataCode@users.noreply.github.com>
Date:   Thu Nov 21 14:06:23 2024 +0200

    feat(ui5-list): add Home and End key handling for Load More button (#10206)
    
    Improving the keyboard navigation for the ui5-list when the Load More button is present:
    
    Home Key:
    - If the focus is on the Load More button and the Home key is pressed, the focus moves to the first item in the list.
    
    End Key:
    - When pressed once, the focus moves to the last item in the list.
    - When pressed again while the focus is already on the last item, the focus moves to the Load More button.
