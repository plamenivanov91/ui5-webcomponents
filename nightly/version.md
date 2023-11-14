commit a13a0b490370a2463428d1f55391c0a329f83bbe
Author: Diana Pazheva <diana.pazheva@sap.com>
Date:   Mon Nov 13 16:23:35 2023 +0200

    docs(playground): enhance editing of custom type properties (#7774)
    
    * docs(playground): enhance editing of custom typeproperties
    
    Related to: #7284
    
    Problem:
    Some components have properties of custom types that extend
    sap.ui.webc.base.types.DataType. Storybook allows editing
    the values of those properies in the Controls addon, but by
    default storybook allows to edit them via controls of type
    object. However, in most cases, the more suitable control for
    editing those values would be of type text or number.
    
    Solution:
    Further customized the story settings to specify the expected
    control type. To handle the issue globally, added that logic to
    the existing script that sets control types based on property type.
    
    * docs(playground): utilize native Array.prototype.includes function
