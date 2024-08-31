commit caaf09c88f1294aa5e0679f7063332400d549f3e
Author: Nayden Naydenov <31909318+nnaydenow@users.noreply.github.com>
Date:   Fri Aug 30 14:40:37 2024 +0300

    chore: bump chromedrier (#9777)
    
    In chrome 128 new headless mode described in https://developer.chrome.com/docs/chromium/new-headless is set to be used by default. This made tests unstable. To make tests stable again we have to pass `old` as value to the `headless` parameter in Chrome configuration options.
