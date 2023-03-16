import React, {ReactElement} from "react";
import {IRadioGroupProps} from "../../types/Input.types";

const RadioGroup: React.FC<IRadioGroupProps> = ({formValues}): ReactElement => {

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
                        defaultChecked={formValues.gender === 'male' || false}
                    />
                    <label htmlFor="male">Male</label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        defaultChecked={formValues.gender === 'female' || false}
                    />
                    <label htmlFor="female">Female</label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="undefined"
                        name="gender"
                        value="undefined"
                        defaultChecked={formValues.gender === 'undefined' || false}
                    />
                    <label htmlFor="undefined">Prefer not to tell</label>
                </div>
            </div>
        </div>
    );
};

export default RadioGroup;