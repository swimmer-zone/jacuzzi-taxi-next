'use client'
import supabase from './config/supabase.js';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from "next/image";
import '../assets/_global.scss';
import '../assets/home.scss';
import { FooterComponent, HamburgerComponent, HeaderComponent } from '../Components';

// https://vercel.com
// https://nextjs.org/docs
// https://nextjs.org/learn
// https://vercel.com/templates?framework=next.js
// https://vercel.com/new


const Home = () => {
	const [ error, setError ] = useState(null);
	const [ pages, setPages ] = useState([]);

	useEffect(() => {
		const fetchPages = async () => {
			let { data, error } = await supabase
				.from('pages')
				.select('id, content')
				.eq('page_identifier', 'home');

			if (error) {
				setError('Could not fetch pages');
				setPages(null);
				console.log(error);
			}
			if (data) {
				setPages(data);
				setError(null);
			}
		};

		fetchPages();
	}, []);

	;

	return (<>
		<Head>
			<title>Jacuzzi Taxi</title>
		</Head>
		<HamburgerComponent/>
		<HeaderComponent />
		<main>
			<section className="main">
				<div className="inner">
					{error && <p className="error">{error}</p>}
					{pages.map(page => {
						const content = '<Image src="/home.jpg" alt="" width="500" height="320" priority/>' + page.content
						return ((<div key={page.id} dangerouslySetInnerHTML={{__html: content}} />)
					)})}
				</div>
			</section>
		</main>
		<FooterComponent />
	</>);
}

export default Home;
