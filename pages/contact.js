import { useState } from 'react';
import supabase from '../app/config/supabase.js';
import '../assets/_global.scss';
import '../assets/contact.scss';

const Contact = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ comment, setComment ] = useState('');
	const [ formError, setFormError ] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name || !email || !comment) {
			setFormError('Niet alle verplichte velden zijn ingevuld');
			return;
		}

		const { data, error } = await supabase
			.from('contact')
			.insert([{ name, email, comment }]);

		if (error) {
			console.log(error);
			setFormError('Er is iets fout gegaan bij het opslaan');
		}
		if (data) {
			console.log(data);
			setFormError(null);
		}
	}

	return (
		<main>
			<section className="main">
				<div className="inner">
					<div>
						<h1>Contact</h1>
						<form onSubmit={handleSubmit}>
							<div>
								<label htmlFor="name">Naam <span style={{color: 'red'}}>*</span></label>
								<input 
									type="text" 
									name="name"
									id="name"
									value={name}
									onChange={(e) => setName(e.target.value)}/>
							</div>
							<div>
								<label htmlFor="email">E-mail <span style={{color: 'red'}}>*</span></label>
								<input 
									type="email" 
									name="email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}/>
							</div>
							<div>
								<label>Opmerkingen <span style={{color: 'red'}}>*</span></label>
								<textarea 
									name="comment"
									id="comment"
									value={comment}
									onChange={(e) => setComment(e.target.value)}/>
							</div>
							<p>Velden gemarkeerd met een (<span style={{color: 'red'}}>*</span>) zijn verplicht</p>
							<button className="primary">Verstuur</button>

							{formError && <p className="error">{formError}</p>}
						</form>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Contact;
