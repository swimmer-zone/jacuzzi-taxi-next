import Image from 'next/image';
import { CarouselComponent, DateComponent } from '../Components';
import '../assets/_global.scss';
import '../assets/products.scss';

const Products = () => {
	return (
		<main>
			<section className="main">
				<div className="inner">
					<div>
						<h1>Jacuzzi ABC</h1>
						<Image src="/jacuzzi-royal.jpg" alt="Jacuzzi Royal" width="500" height="333" priority/>

						<h2>Bestel ook deze producten</h2>
						<CarouselComponent />

						<h2>Reserveer nu</h2>
						<DateComponent />
					</div>
				</div>
			</section>
		</main>
	)
}

export default Products;
