commit 4382d4e280ffcf01a924163b9b719887c17f529a
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Wed Nov 13 13:23:49 2024 +0200

    feat(ui5-form): update to latest accessibility spec (#10152)
    
    The following accessibility changes are applied to the Form web component to full-fill the latest spec.
    Form
    form with groups has role="region"
    form without groups have role="form"
    form are referenced with the form header text (via aria-labelledby)
    FormGroup
    form groups are referenced with their form group header texts (via aria-labelledby)
    form groups have role="form"
    form groups create a fast navigation group - to jump from one group to another with F6
    
    Fixes: #9952
