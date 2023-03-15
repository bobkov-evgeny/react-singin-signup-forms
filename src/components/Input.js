import './input.css';

export const Input = (props) => {
    const {
        name,
        label,
        value,
        placeholder,
        description,
        error,
        variant,
        radius,
        size,
        asterisk,
        disabled
    } = props;

    return (
        <div className={'input-container'} style={{fontSize: 16}}>
            <label className={'label'} htmlFor={name}>
                {label}
            </label>

            {description &&
                <span className={'description'}>{description}</span>
            }

            <input
                className={'input'}
                name={name}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
};