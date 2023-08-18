'use client'

import supabase from '../app/config/supabase.js';
import React, { useEffect, useState } from 'react';
import Faq from 'react-faq-component';

// https://www.npmjs.com/package/react-faq-component

const config = {
    animate: true,
    tabFocus: true
};

const styles = {
    bgColor: 'white',
    titleTextColor: "#3998f4",
    rowTitleColor: "#3998f4",
    rowContentColor: '#0b2e56',
    arrowColor: "#3998f4",
};

const FaqComponent = () => {
	const [ error, setError ] = useState(null);
	const [ faq, setFaq ] = useState([]);

	useEffect(() => {
		const fetchFaq = async () => {
			let { data, error } = await supabase
				.from('faq')
				.select()
				.eq('is_visible', true);
				
			if (error) {
				setError('Could not fetch FAQ');
				setFaq(null);
				console.log(error);
			}
			if (data) {
				setFaq(data);
				setError(null);
			}
		};

		fetchFaq();
	}, []);

	const rows = faq.map(q => ({
		title: q.question,
		content: q.answer
	}));

	const data = {rows};

    return (
        <div>
			{error && <p className="error">{error}</p>}
            {faq && <Faq
                data={data}
                styles={styles}
                config={config}
            />}
        </div>
    );
}

export default FaqComponent;
