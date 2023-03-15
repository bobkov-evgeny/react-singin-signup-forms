import './input.css';
import {useMemo} from "react";

const Sizes = {
    XS: 12,
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 20
};
const BorderRadius = {
    XS: '0.125em',
    SM: '0.25em',
    MD: '0.5em',
    LG: '1em',
    XL: '2em'
};

const Input = (props) => {
    const {
        type = 'text',
        name = '',
        label,
        value,
        placeholder,
        description,
        error,
        radius = 'MD',
        size = 'MD',
        required,
        disabled,
        onChange,
        icon
    } = props;

    const Icon = icon || null

    return (
        <div className={'input-wrapper'} style={{fontSize: Sizes[size]}}>
            {label &&
                <label className={`label${required ? '_required' : ''}`} htmlFor={name}>
                    {label}
                </label>
            }

            {description &&
                <span className={'description'}>{description}</span>
            }

            <div className={'input-container'}>
                {icon &&
                    <div className={'icon-container'}>
                        <Icon height={'1em'} width={'1em'} />
                    </div>
                }

                <input
                    type={type}
                    className={'input'}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={onChange}
                    data-invalid={!!error}
                    data-icon={!!icon}
                    style={{
                        borderRadius: BorderRadius[radius]
                    }}
                />
            </div>

            {error &&
                <span className={'error'}>{error}</span>
            }
        </div>
    );
};

export default Input;