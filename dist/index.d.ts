/// <reference types="react" />
import React$1 from 'react';
import { ButtonGroupProps, CheckboxProps, MenuItemProps, RadioGroupProps, SelectProps, SliderProps, SwitchProps, AvatarProps, ToggleButtonProps, ToggleButtonGroupProps, BadgeProps, DividerProps, ListProps, TableProps, TooltipProps, TypographyProps } from '@mui/material';

type ButtonProps = {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler;
    children?: React.ReactNode;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    variant?: 'contained' | 'outlined' | 'text';
    href?: string;
};

declare const Button: (props: ButtonProps) => React$1.JSX.Element;
//# sourceMappingURL=Button.d.ts.map

type ButtonGroupProp = ButtonGroupProps;

declare const ButtonsGroup: (props: ButtonGroupProp) => React$1.JSX.Element;
//# sourceMappingURL=ButtonGroup.d.ts.map

type CheckProps = CheckboxProps;

declare const CheckBox: (props: CheckProps) => React$1.JSX.Element;
//# sourceMappingURL=CheckBox.d.ts.map

declare const ldnMenuItem: (props: MenuItemProps) => React$1.JSX.Element;
//# sourceMappingURL=MenuItem.d.ts.map

type RadioGroupProp = RadioGroupProps;

declare const ldnRadioGroup: (props: RadioGroupProp) => React$1.JSX.Element;
//# sourceMappingURL=RadioGroup.d.ts.map

type SelectProp = SelectProps;

declare const ldnSelect: (props: SelectProp) => React$1.JSX.Element;
//# sourceMappingURL=Select.d.ts.map

type SliderProp = SliderProps;

declare const ldnSlider: (props: SliderProp) => React$1.JSX.Element;
//# sourceMappingURL=Slider.d.ts.map

type SwtichProp = SwitchProps;

declare const ldnSwitch: (props: SwtichProp) => React$1.JSX.Element;
//# sourceMappingURL=Switch.d.ts.map

type AvatarProp = AvatarProps;

declare const ldnAvatar: (props: AvatarProp) => React$1.JSX.Element;
//# sourceMappingURL=Avatar.d.ts.map

type ToggleButtonProp = ToggleButtonProps;

declare const ldnToggleButton$1: (props: ToggleButtonProp) => React$1.JSX.Element;
//# sourceMappingURL=ToggleButton.d.ts.map

type ToggleButtonGroupProp = ToggleButtonGroupProps;

declare const ldnToggleButton: (props: ToggleButtonGroupProp) => React$1.JSX.Element;
//# sourceMappingURL=ToggleButtonGroup.d.ts.map

type BadgeProp = BadgeProps;

declare const ldnBadge: (props: BadgeProp) => React$1.JSX.Element;
//# sourceMappingURL=Badge.d.ts.map

type DividerProp = DividerProps;

declare const ldnDivider: (props: DividerProp) => React$1.JSX.Element;
//# sourceMappingURL=Divider.d.ts.map

type ListProp = ListProps;

declare const ldnList: (props: ListProp) => React$1.JSX.Element;
//# sourceMappingURL=List.d.ts.map

type TableProp = TableProps;

declare const ldnTable: (props: TableProp) => React$1.JSX.Element;
//# sourceMappingURL=Table.d.ts.map

type TooltipProp = TooltipProps;

declare const ldnTooltip: (props: TooltipProp) => React$1.JSX.Element;
//# sourceMappingURL=ToolTip.d.ts.map

type TypographyProp = TypographyProps;

declare const ldnTypography: (props: TypographyProp) => React$1.JSX.Element;
//# sourceMappingURL=Typography.d.ts.map

export { ldnAvatar as Avatar, ldnBadge as Badge, Button, ButtonsGroup as ButtonGroup, CheckBox, ldnDivider as Divider, ldnList as List, ldnMenuItem as MenuItem, ldnRadioGroup as RadioGroup, ldnSelect as Select, ldnSlider as Slider, ldnSwitch as Switch, ldnTable as Table, ldnToggleButton$1 as ToggleButton, ldnToggleButton as ToggleButtonGroup, ldnTooltip as Tooltip, ldnTypography as Typography };
