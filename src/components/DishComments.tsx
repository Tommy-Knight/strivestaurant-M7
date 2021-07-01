import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { pasta, comment, selectedPasta, cheat } from "../helpers/interface";

export const DishComments = ({ selectedPasta }: pasta | selectedPasta | null | cheat) => {
	console.log("here", selectedPasta);

	return (
		<Container>
			<Row className='justify-content-center mt-3'>
				<Col xs={12} md={6}>
					<ListGroup>
						{selectedPasta ? (
							selectedPasta.comments.map((c: comment) => (
								<ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
							))
						) : (
							<p>Click on a dish to read its comments</p>
						)}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

