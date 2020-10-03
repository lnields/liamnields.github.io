import React from 'react';
import Watermark from '../components/Watermark';
import Social from '../components/Social';
import { Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
	render() {
		return (
			<div>
				<Row>
					<Col>
						<Social
							sites={['https://github.com/liamnields']}
						/>
					</Col>
					<Col>
						<Watermark />
					</Col>
				</Row>
			</div>
		);
	}
}

export default Footer;
