commit 7c4575622c52faf398321e44efb58f82b2213598
Author: Tsanislav Gatev <tsanislav.gatev@sap.com>
Date:   Wed Jan 22 14:12:23 2025 +0200

    refactor(ui5-ai-button): change api names (#10572)
    
    We're improving API naming. We have 3 changes in the API.
    CHANGE: In the ButtonState we change the splitMode property to showArrowButton.
    BEFORE:
    
    <ui5-ai-button-state name="revise" text="Revise" icon="ai" split-mode></ui5-ai-button-state>
    NOW:
    
    <ui5-ai-button-state name="revise" text="Revise" icon="ai" show-arrow-button></ui5-ai-button-state>
    CHANGE: In the Button, we change the activeArrowButton to arrowButtonPressed following the convention in the framework.
    
    function menuOpenHandler() {
            var button = menu.opener;
    
            button.activeArrowButton = true;
    }
    NOW:
    
    function menuOpenHandler() {
            var button = menu.opener;
    
            button.arrowButtonPressed = true;
    }
    CHANGE: In the Button we also change the arrow-click event name to arrow-button-click, so the event name is easier to understand and we ensure that it might not be mistaken with the arrow icon when the arrow button is not shown.
    
    myAiButtonSplit.addEventListener("arrow-click", aiButtonSplitArrowClickHandler);
    NOW:
    
    myAiButtonSplit.addEventListener("arrow-button-click", aiButtonSplitArrowClickHandler);
