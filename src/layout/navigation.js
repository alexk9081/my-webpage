import { Link } from 'react-router-dom';

function NavigationBar() {
    return <nav>
        <Link to='/'>Home</Link>
        <Link to='/gallery'>Go to Gallery</Link>
    </nav>
}

export default NavigationBar;