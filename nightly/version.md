commit 87eaa359d2a643868f0e4a6f399376601ea32e94
Author: Boyan Rakilovski <boyan.rakilovski@sap.com>
Date:   Fri Mar 28 10:04:10 2025 +0200

    fix(ui5-date-picker): display value state message in the value help (#10919)
    
    Previously, the valueStateMessage was displayed only below or above the input field, making it less clear when a valueState was active. With this enhancement, the valueStateMessage and its associated valueState styling now also appear in the header of the time selection popover, providing better visibility of the valueState and its provided message.
