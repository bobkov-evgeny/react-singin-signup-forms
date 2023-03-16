import React, {ReactElement} from "react";
import {FormValues} from "./Form.types";

export enum ImportSizeTypes {
    XS = 'XS',
    SM = 'SM',
    MD = 'MD',
    LG = 'LG',
    XL = 'XL'
}

export interface IInputProps {
    type?: string;
    name: string;
    label?: string;
    value?: string;
    placeholder?: string;
    description?: string;
    error?: string;
    radius?: ImportSizeTypes;
    size?: ImportSizeTypes;
    required?: boolean;
    disabled?: boolean;
    icon?: any;
}

export interface IRadioGroupProps {
    formValues: FormValues;
}