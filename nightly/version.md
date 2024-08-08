commit dd8d77da21b4c6edd6d9c6b353036a4e3fa21988
Author: Nayden Naydenov <31909318+nnaydenow@users.noreply.github.com>
Date:   Wed Aug 7 15:33:44 2024 +0300

    chore: enable tests in base (#9285)
    
    - Make new `tsconfig.json` file which is in `@ui5/webcomponents-tools` package to be extended by all other packages' `tsconfig.json` files
    - Rewrite test elements in TypeScript and move them in `src` folder
    - Write cypress tests for the package in TypeScript
    - Add new `mount` function to mount ui5-webcomponents and library configuration. In additon, new resetConfiguration method is added the clean cached configurations
