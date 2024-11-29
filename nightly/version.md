commit 31507939da6051750bcae0a900f6bc1cfce2f926
Author: Nikola Anachkov <87311182+NakataCode@users.noreply.github.com>
Date:   Thu Nov 28 13:42:11 2024 +0200

    feat(ui5-list): handle arrow up and down navigation for load more button (#10251)
    
    The "Load More" button can now be accessed using the arrow up and down keys:
    
    Pressing the arrow down key while focused on the last list item now moves focus to the "Load More" button.
    Pressing the arrow up key while focused on the "Load More" button navigates back to the last item in the list.
    Tests added for:
    
    End key navigation: Moves focus from first item to last item and then to growing button
    Arrow down/up navigation: Moves focus between last list item and growing button
    Home key on growing button: Moves focus to first list item
