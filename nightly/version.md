commit 2ee9b024e152029394b39324f2bb7dcb73293dbb
Author: Konstantin Gogov <konstantin.gogov@sap.com>
Date:   Thu Nov 6 17:17:04 2025 +0200

    feat(framework): Custom Illustrations Documentation & API Enhancement (#12260)
    
    - Rename registerIllustration to unsafeRegisterIllustration with security warnings
    - Add new registerIllustration API that accepts template functions instead of raw SVG strings
    - Update IllustratedMessage component to execute templates via executeTemplate()
    - Add IllustratedMessageTemplate support for both safe (object) and unsafe (string) variants
    - Update build tool to use unsafeRegisterIllustration for generated illustrations
    - Add comprehensive documentation for both registration methods
    - Create playground page demonstrating safe and unsafe approaches with working examples
    - Export IllustrationData and UnsafeIllustrationData types for better TypeScript support
    
    The safe variant (registerIllustration) uses template functions to prevent XSS vulnerabilities,
    while the unsafe variant (unsafeRegisterIllustration) maintains backward compatibility for
    raw SVG strings with explicit security warnings.
    
    Jira: BGSOFUIPIRIN-6913
