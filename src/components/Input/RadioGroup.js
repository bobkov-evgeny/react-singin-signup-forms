const RadioGroup = ({formValues}) => {

    return (
        <div className={'gender-select-container'}>
            <span className={'label_required'}>Gender:</span>

            <div className={'gender-select-input-group'}>
                <div>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        defaultChecked={formValues.current.gender === 'male' || false}
                    />
                    <label htmlFor="male">Male</label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        defaultChecked={formValues.current.gender === 'female' || false}
                    />
                    <label htmlFor="female">Female</label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="undefined"
                        name="gender"
                        value="undefined"
                        defaultChecked={formValues.current.gender === 'undefined' || false}
                    />
                    <label htmlFor="undefined">Prefer not to tell</label>
                </div>
            </div>
        </div>
    );
};

export default RadioGroup;