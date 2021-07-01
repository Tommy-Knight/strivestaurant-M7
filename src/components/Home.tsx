import { Carousel, Col, Container, Row } from "react-bootstrap";
import dishes from "../data/menu.json";
import { useState } from "react";
import {DishComments} from "./DishComments";
import upperName from "../helpers/lib";
import { shopTitle, pasta } from "../helpers/interface";

export const Home = ({ title }: shopTitle) => {
	const [selected, setSelected] = useState<pasta | null>(null);
	console.log("title", title);

	return (
		<Container>
			<Row className='justify-content-center mt-3'>
				<Col xs={12} md={6}>
					<h1>Welcome to {upperName(title)}!</h1>
					<h3 className='text-center mb-4'>🌥 where the only limit is your imagination!</h3>
					<h5 className='text-center mb-4'>we once made a bicycle using only pasta! 🍝</h5>
					<Carousel>
						{dishes.map((dish, i) => (
							<Carousel.Item
								key={dish.id}
								onClick={() => {
									setSelected(dish);
									console.log(dish);
								}}>
								<img className='d-block w-100' src={dish.image} alt={"slide number " + (i + 1)} />
								<Carousel.Caption>
									<h3>{dish.name}</h3>
									<p>{dish.description}</p>
								</Carousel.Caption>
							</Carousel.Item>
						))}
					</Carousel>
				</Col>
				<DishComments selectedPasta={selected} />
			</Row>
		</Container>
	);
};

export default Home;
