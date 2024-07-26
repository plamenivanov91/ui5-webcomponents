commit d55eba85ff4860bacaff1988c5e1aa56eaa4a225
Author: Nayden Naydenov <31909318+nnaydenow@users.noreply.github.com>
Date:   Thu Jul 25 16:26:49 2024 +0300

    feat: enhance feature initialization (#9479)
    
    Previously, feature loading depended on the import order, requiring features to be imported before the component definition. This caused issues in some situations, especially when creating chunks because the imports can be reordered by the build tools.
    
    With this change, we have split the features into two types: library-specific and component-specific. Library-specific features need to be imported before the boot process, otherwise, it can cause serious issues, because the need to re-render all components and manipulate the DOM (including scripts, styles, and meta tags). Component-specific features can now be imported without a specific order, and components that depend on these features will automatically update, enabling the feature on the next rendering of the component.
    
    Fixes: #8175
