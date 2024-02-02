import PropTypes from 'prop-types';

export default function TabButton({ children }) {
 

TabButton.propTypes = {
    // this is a prop validation for 
  children: PropTypes.node.isRequired,
};
    return (
        <>
        <li>
            <button>{children}</button>
        </li>
        </>
    );
}