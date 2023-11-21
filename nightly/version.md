commit 007e755f301e6112bf98afef1b47676b422eb268
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Tue Nov 21 11:23:29 2023 +0200

    fix(ui5-switch): align 'off' text in RTL, add compact mode params (#7603)
    
    In RTL mode the 'off' icon of `Graphical` type Switch was misaligned due to missing parameters for RTL scenario of the control.
    
    Fixes: #7522
    Fixes: #7806
