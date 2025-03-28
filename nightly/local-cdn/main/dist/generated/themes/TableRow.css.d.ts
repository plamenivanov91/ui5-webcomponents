declare const _default: ":host{background:var(--sapList_Background)}:host([position]){height:var(--row-height)}:host([aria-selected=true]){background-color:var(--sapList_SelectionBackgroundColor);border-bottom:var(--sapList_BorderWidth) solid var(--sapList_SelectionBorderColor)}:host([_interactive]){cursor:pointer}@media (hover: hover){:host([_interactive]:hover){background:var(--sapList_Hover_Background)}:host([_interactive][aria-selected=true]:hover){background:var(--sapList_Hover_SelectionBackground)}}:host([_interactive]:active),:host([_interactive][_active]),:host([_interactive][aria-selected=true]:active),:host([_interactive][aria-selected=true][_active]){background:var(--sapList_Active_Background)}#popin-cell{align-content:initial;flex-direction:column;grid-column:1 / -1}#navigated-cell{position:sticky;right:0;overflow:visible;grid-row:span 2;min-width:0;padding:0;background:inherit}:dir(rtl)#navigated-cell{left:0}:host([navigated]) #navigated{position:absolute;inset:0;background-color:var(--sapList_SelectionBorderColor)}:host([tabindex]:focus) #navigated{transform:translate(calc(var(--_ui5-v2-9-0-rc-2_table_navigated_cell_width) * -1));bottom:2px;top:3px}:host([tabindex]:focus) #navigated:dir(rtl){transform:translate(var(--_ui5-v2-9-0-rc-2_table_navigated_cell_width))}:host([tabindex]:focus) #navigated-cell{clip-path:inset(var(--sapContent_FocusWidth) var(--sapContent_FocusWidth) var(--sapContent_FocusWidth) calc(var(--_ui5-v2-9-0-rc-2_table_navigated_cell_width) * -1))}:host([tabindex]:focus) #navigated-cell:dir(rtl){clip-path:inset(var(--sapContent_FocusWidth) calc(var(--_ui5-v2-9-0-rc-2_table_navigated_cell_width) * -1) var(--sapContent_FocusWidth) var(--sapContent_FocusWidth))}:host([navigated]) #popin-cell{grid-column:1 / -2}#actions-cell{display:flex;align-items:center;gap:var(--_ui5-v2-9-0-rc-2_table_row_actions_gap)}#actions-cell:has(+#navigated-cell){right:var(--_ui5-v2-9-0-rc-2_table_navigated_cell_width);overflow:auto}:dir(rtl)#actions-cell:has(+#navigated-cell){left:var(--_ui5-v2-9-0-rc-2_table_navigated_cell_width)}\n";
export default _default;
