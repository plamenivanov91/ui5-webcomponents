commit 950441b7d272e8cd20499461f4cfa05ad3ac7510
Author: Duc Vo Ngoc <duc.vo.ngoc@sap.com>
Date:   Thu Nov 7 11:23:54 2024 +0100

    fix(ui5-table-growing): button is shown despite scroll type (#10142)
    
    When the table is not filling/utilizing all the space inside of the scroll container, we need to show a "More" button, as scrolling is not possible yet.
    Once the scroll container is scrollable, the "More" button should disappear, which does not happen as of now.
    Adjusted the logic determining when to render a button. Additionally, removed the overflow on the host element. Instead the table element should fill the parent element now.
    
    Fixes #10045
