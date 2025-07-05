commit aa99f55f68159823c574a6562b9b638805b9d88c
Author: Diana <diana.petcheva@sap.com>
Date:   Fri Jul 4 11:17:32 2025 +0200

    fix(ui5-date-picker, ui5-calendar): use correct year format (#11712)
    
    To represent the year in a format pattern, the lowercase `y` symbol should be used as the capital `Y` means something else. More information can be found here: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
