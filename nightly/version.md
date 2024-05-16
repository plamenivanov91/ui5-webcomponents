commit 8d720429d9ad416f73f42c08ab9aa0e892e24ddb
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Thu May 16 10:58:38 2024 +0300

    feat(ui5-form): introduce Form web component (#8281)
    
    The change introduces several components - **Form**, **FormGroup** and **FormItem** to build application forms easier and according to latest design guidelines.
    
    ## Overview
    
    The Form is a layout component that arranges labels and form fields (like input fields) pairs
    into specific number of columns.
    
    ### Structure
    
    - Form is the top-level container component, responsible for the content layout and the responsiveness.
    - FormGroup (ui5-form-group) enables the grouping of the Form content.
    - FormItem (ui5-form-item) is a pair of label and form field.
    
    ### Responsiveness
    
    The Form component reacts and changes its layout on predefined breakpoints.
    Depending on its size, the Form content (FormGroups and FormItems) gets divided into one or more columns as follows:
    
    - <b>S</b> (< 600px) – 1 column</li>
    - <b>M</b> (600px - 1022px) – up to 2 columns are recommended (default: 1)</li>
    - <b>L</b> (1023px - 1439px) - up to 3 columns are recommend (default: 2)</li>
    - <b>XL</b> (> 1439px) – up to 6 columns are recommend (default: 2)</li>
    
    To change the layout, use the <code>layout</code> property - f.e. layout="S1 M2 L3 XL6".
    <b>Note:</b> there is no restriction of the column numbers (f.e you can specify XL9 and get the layout divided in to 9 columns), however recommendations are based on our experience to best suite known use-cases.
    
    ### Form Groups Distribution
    
    To make better use of screen space, there is built-in logic to calculate how many columns should a FormGroup occupy.
    
    - Example 1 (perfect match): 4 columns and 4 groups: each group will use 1 column.
    - Example 2 (balanced distribution): 4 columns and 2 groups: each group will use 2 columns.
    - Example 3 (unbalanced distribution):  3 columns and 2 groups: the larger one will use 2 columns, the smaller 1 column.
    <b>Note:</b> The size of a group element is determined by the number of FormItems assigned to it.
     In case of equality, the first in the DOM will use more columns and the last - less columns.
    - Example 4 (more groups than columns): 3 columns and 4 groups: each FormGroup uses only 1 column, the last FormGroup will wrap on the second row.
    
    ### Form Group `column-span`
    
    To influence the built-in group distribution, you can use the FormGroup's **columnSpan** property,
    that defines how many columns the group should expand to.
    
    ### Form Item's Label Placement
    
    By default, the labels take 4/12 of the FormItem, leaving 8/12 parts to associated fields.
    You can control what space the labels should take via the **labelSpan** property
    For example:
     - To always place the labels on top set: **labelSpan="S12 M12 L12 XL12"**.
     - To make the label take half of the item set: **labelSpan="S6 M6 L6 XL6"**.
    
    Fixes: #7854
