commit 7894823d5aba86098f2661977627be8cac3df97c
Author: Duc Vo Ngoc <duc.vo.ngoc@sap.com>
Date:   Tue Aug 20 16:27:15 2024 +0200

    fix(ui5-table): range selection should stop when releasing shift (#9710)
    
    Instead of using isShift(), use event.shiftKey instead, as isShift just checks the released key.
