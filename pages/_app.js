import Head from 'next/head';
import { FooterComponent, HamburgerComponent, HeaderComponent } from '../Components';

const MyApp = ({ Component, pageProps }) => {
	return (<>
		<Head>
			<title>Jacuzzi Taxi</title>
		</Head>
		<HamburgerComponent/>
		<HeaderComponent/>
		<main>
			<Component {...pageProps} />
		</main>
		<FooterComponent/>
	</>);
}

export default MyApp;