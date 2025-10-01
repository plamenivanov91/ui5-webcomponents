commit 151656acc8a5dffb1cb4e4e85db1aab85ee404fc
Author: Nayden Naydenov <31909318+nnaydenow@users.noreply.github.com>
Date:   Tue Sep 30 14:57:51 2025 +0300

    chore: correct file loading on dev (#12399)
    
    `vite-plugin-checker` is not emitting `.ts` files (the ones overriding the original OpenUI5 files) during development, which leads to missing files and errors.
    
    With this PR, the overridden files are explicitly listed in Vite so that they are resolved from the `src` directory in development mode.
