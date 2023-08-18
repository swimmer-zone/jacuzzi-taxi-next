// import { useParams } from 'next/navigation';
import '../../assets/_global.scss';
import '../../assets/products.scss';

const Categories = ({ params }) => {
	// const params = useParams();

	return (
		<main>
			<section className="main">
				<div className="inner">
					{/* <h1>{params.slug}</h1> */}
				</div>
			</section>
		</main>
	)
}

export default Categories;
