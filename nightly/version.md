commit da527cb42166c68c4f19742d54d7ee7d910d13dd
Author: Duc Vo Ngoc <duc.vo.ngoc@sap.com>
Date:   Wed Apr 9 10:35:43 2025 +0200

    fix(ui5-table-growing): add rootMargin to observer (#11242)
    
    There is an issue with subpixel rendering introducing rounding errors. The growing sample in the playground is not working with zoom lower than 100%.
    
    If the table is inside a scroll container, which is inside of an IFrame taken a fraction of the available width, rounding errors lead to the IntersectionObserver not calling the callback, as it does not detect the end-row scrolling into viewport.
    
    Added a rootMargin of 5px to try to circumvent the rounding issue by increasing the intersection area. Additionally, the root should be the scrollContainer instead of the document.
