import PropTypes from 'prop-types';

const CheckboxWrapper = ({ title, classNameCheckboxContainer, children }) => {
    return (
        <div className='checkbox-wrapper'>
            <p>{title}</p>

            <div className={`checkboxes-container ${classNameCheckboxContainer ? classNameCheckboxContainer : ''}`}>
                {children}
            </div>
        </div>
    )
};

CheckboxWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    classNameCheckboxContainer: PropTypes.string,
    children: PropTypes.node,
};

export default CheckboxWrapper;