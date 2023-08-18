import '../assets/components/nav.scss';
import { navItems } from '../json';

const NavComponent = (props) => {

	return (<nav>
        <ul>
            {Object.keys(navItems).map(key => {
				if (props.active === navItems[key].url) {
					return (
						<li key={key} className="active">
							<a href={navItems[key].url}>{navItems[key].label}</a>
						</li>);
				} else {
					return (
						<li key={key}>
							<a href={navItems[key].url}>{navItems[key].label}</a>
						</li>);
				}
            })}
        </ul>
	</nav>);
};

export default NavComponent;
