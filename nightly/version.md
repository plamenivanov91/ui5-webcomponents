commit 7460a76a803dc12ce92574472084a0c202d984a3
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Tue Aug 5 16:37:18 2025 +0300

    fix(framework): copy "base" pkg i18n assets to `dist/prod` (#12072)
    
    Recently added i18n texts to the `base` package are not properly shipped - the i18n assets are missing from `@ui5/webcomponents-base/dist/prod/generated/assets/i18n` folder, causing issues like:
    
    > RollupError: Could not resolve "../assets/i18n/messagebundle_en.json"
    > from "node_modules/@ui5/webcomponents-base/dist/prod/generated/json-imports/i18n.js"
    
    With this change, the assets are copied and present in dist/prod.
