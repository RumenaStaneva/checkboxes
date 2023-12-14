import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/Checkbox.css';

const Checkbox = ({ id, label, disabled, checked, partial }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleCheckboxChange();
        }
    };

    return (
        <>
            <label htmlFor={id} className={`d-flex align-items-center checkbox-label ${disabled ? 'disabled' : ''}`}>
                <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    onKeyDown={handleKeyPress}
                    id={id}
                    aria-label={label}
                    disabled={disabled}
                />

                <span
                    className={`checkbox ${isChecked ? 'checkbox--active' : ''} ${disabled ? 'disabled' : ''} ${partial ? 'partial' : ''}`}
                    aria-hidden="true"
                />

                {label}
            </label>
        </>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    partial: PropTypes.bool,
};

export default Checkbox;