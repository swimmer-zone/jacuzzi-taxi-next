import React from 'react';
import '../assets/components/header.scss';
import { LogoComponent, NavComponent } from '../Components';

const HeaderComponent = (props) => {

	return (<header>
		<div className="background">
			<div className="inner">
				<LogoComponent/>
				<NavComponent/>
			</div>
		</div>
		<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
			<defs>
				<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
			</defs>
			<g className="parallax">
				<use href="#gentle-wave" x="48" y="0" fill="#c7e3fc88" />
				<use href="#gentle-wave" x="48" y="3" fill="#c7e3fc44" />
				<use href="#gentle-wave" x="48" y="5" fill="#c7e3fc22" />
				<use href="#gentle-wave" x="48" y="7" fill="#c7e3fc" />
			</g>
		</svg>
	</header>);
}

export default HeaderComponent;
