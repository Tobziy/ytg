import PropType from 'react-prop-type';
export default function NavButton({children}) {
    propTypes: {
        children: PropType.string.isRequired},
    
    return(
        <li>
            <button>{children}</button>
        </li>
    );
}
