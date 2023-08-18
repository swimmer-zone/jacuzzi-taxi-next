'use client'
import '../assets/_global.scss';
import '../assets/faq.scss';
import { FaqComponent } from '../Components';

const Faq = () => {
	return (
		<main>
			<section className="main">
				<div className="inner">
					<div>
						<h1>Veelgestelde vragen</h1>
						<FaqComponent />
					</div>
				</div>
			</section>
		</main>
	)
}

export default Faq;
