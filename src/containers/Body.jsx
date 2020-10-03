import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Tabs from '../components/Tabs';
import Section from '../components/Section';
import SmallLink from '../components/SmallLink';
import Project from '../components/Project';
import Paper from '../components/Paper';
import List from '../components/List';
import Emoji from '../components/Emoji';

import secondPlace from '../assets/second-place.png';
import trophy from '../assets/trophy.png';
import cloud from '../assets/cloud.png';
import dance from '../assets/dance.png';
import surfer from '../assets/surfer.png';
import books from '../assets/books.png';
import face from '../assets/face.png';
import roastBotLogo from '../assets/roast-bot-logo.png';

const style = {
	marginLeft: '6vw',
	marginRight: '15vw',
};

function Body() {
	return (
		<div style={style}>
			<Section title="About Me">
				<p>
					{"I'm a software engineer intern at "}
					<SmallLink href="https://sawgrassnutralabs.com/">
						Sawgrass Nutra Labs
					</SmallLink>
					{
						' where I am building an inventory tracking system. I am also sudying computer science at the '
					}{' '}
					<SmallLink href="https://unf.edu">
						University of North Florida
					</SmallLink>
					.{' '}
					{
						' Outside of work and school, I have taken interest in building web aplications. '
					}
				</p>
				<p>
					{'In my free time, I enjoy surfing '}
					<Emoji
						src={surfer}
						style={{ width: '13pt', height: '13pt' }}
					/>
					{', reading '}
					<Emoji
						src={books}
						style={{ width: '13pt', height: '13pt' }}
					/>
					{', and building new connections '}
					<Emoji
						src={face}
						style={{ width: '13pt', height: '13pt' }}
					/>
					.
				</p>
			</Section>

			<Section title="Projects">
				<Row>
					<Project
						icon="https://cdn.onlinewebfonts.com/svg/img_447723.png"
						title="Algorithms"
						stack={['Python']}
						href="https://github.com/isaiahnields/danger.ai"
					>
						Solved easy, medium and hard Leetcode and
						AlgoExpert algorithms in Python. Competed in daily
						competitions on LeetCode.
					</Project>
				</Row>
				<Row>
					<Project
						icon="https://www.iconfinder.com/data/icons/business-flatcircle/512/strategy-512.png"
						title="Web Tic-Tac-Toe"
						stack={['React']}
						href="https://github.com/isaiahnields/danger.ai"
					>
						Built a multiplayer Tic-Tac-Toe game using React.
						App responds to user input, keeps track of users
						turns, and calculates if a winning position is
						reached. Deployed app on GitHub Pages and shared
						app with friends. Added Google Analytics to track
						usage and garnered over 20 users.
					</Project>
				</Row>
			</Section>

			<Section title="Experience">
				<Tabs
					jobs={[
						{
							company: 'Sawgrass Nutra Labs',
							items: [
								'Worked at Sawgrass Nutra Labs, a contract manufacurer for suplements, on the engineering team.',
								'Designed and built dashboard views for Sawgrass’s nutraceutical inventory tracking software.',
								'Deployed React frontend code with AWS S3.',
								'Utilized Python AWS Lambda functions and MySQL to build out backend inventory tracking functionality.',
								'Added logging to the backend using AWS CloudWatch and created reports on user behavior to drive product direction.',
								'Allowd Sawgrass to be 5% more eficient in there ordering completion process.',
								'reduced inventory tracking error by over 13%',
							],
							location: 'Jacksonville, FL',
							date: 'Mar 2020 - Sept 2020',
						},
						{
							company: 'Little Ceasars',
							items: [
								'Worked as an assistant manager helping with scheduling inventory and shift leading.',
								'Helped drive Jacksonville sales ranking from 14th to 5th best in the city.',
								'Lowered number of complaints, waste percentages, and labor cost percentages.',
							],
							location: 'Jacksonville, FL',
							date: 'Mar 2020 - Sept 2020',
						},
					]}
				/>
			</Section>

			<Section title="Skills">
				<Row>
					<Col xl={3} md={6} sm={6} xs={12}>
						<List
							title="Languages"
							items={[
								'Python',
								'JavaScript',
								'Java',
								'HTML',
								'CSS',
								'SQL',
							]}
						/>
					</Col>
					<Col xl={3} md={6} sm={6} xs={12}>
						<List
							title="Tools"
							items={['Bash', 'Git & GitHub', 'MongoDB']}
						/>
					</Col>
					<Col xl={3} md={6} sm={6} xs={12}>
						<List
							title="Libraries"
							items={['React', 'Node.js']}
						/>
					</Col>
				</Row>
			</Section>
		</div>
	);
}

export default Body;
