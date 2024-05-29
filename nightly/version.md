commit 3752ce701fe915fa0b02ba2b114c40bf3b7d9123
Author: Dobrin Dimchev <dobrin.dimchev@sap.com>
Date:   Wed May 29 17:18:22 2024 +0300

    feat(ui5-dynamic-page): introduce new component (#7899)
    
    Adds New `ui5-dynamic-page` component.
    The component is a composition of the following subcomponents:
    - DynamicPageTitle - holds the most top area of DynamicPage (breadcrumbs, actions, etc.)
    - DynamicPageHeader - a container displayed between the title area and the content that allows generic content.
    - content area with random elements
    - footer area with random content
