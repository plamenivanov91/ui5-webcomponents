commit 4b2ab63cae9b175f07d266e4150a587756cd7f6c
Author: Nayden Naydenov <31909318+nnaydenow@users.noreply.github.com>
Date:   Thu Jan 23 15:22:42 2025 +0200

    fix(f6navigation): fast navigation in certain container only (#10485)
    
    Fast navigation includes two main modes: default and scoped. The default mode is used for navigating across all defined groups, while the scoped mode limits navigation to a specific group, such as within a container like a modal dialog.
