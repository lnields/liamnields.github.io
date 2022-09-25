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
import game from '../assets/game.png';
import Inventory from '../assets/inventory.png';
import onlineStreaming from '../assets/online-streaming.png';
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
					{"I'm a software engineer at "}
					<SmallLink href="https://sawgrassnutralabs.com/">
						RF-SMART
					</SmallLink>
					{
						' where I am building mods for customers. I am also sudying computer science at the '
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
					>
						Solved easy, medium and hard Leetcode and
						AlgoExpert algorithms in Python. Competed in daily
						competitions on LeetCode.
					</Project>
				</Row>
				<Row>
					<Project
						icon={game}
						title="Web Tic-Tac-Toe"
						stack={['React']}
					>
						Built a multiplayer Tic-Tac-Toe game using React.
						App responds to user input, keeps track of users
						turns, and calculates if a winning position is
						reached. Deployed app on GitHub Pages and shared
						app with friends. Added Google Analytics to track
						usage and garnered over 20 users.
					</Project>
				</Row>
				<Row>
					<Project
						icon={onlineStreaming}
						title="Concurrent Video Stream"
						stack={['React', 'Node.js', 'Socket.io']}
					>
						Built a concurrent video steaming web app using
						React and socket.io. App create rooms where
						users can concurrently stream youtube videos.
						All users in the room can pause play and skip
						and the video will automatically sync. Users
						can also chat within the app with a built in
						chat feature.
					</Project>
				</Row>
				<Row>

				<a href="https://iconscout.com/icons/inventory" target="_blank">Inventory Icon</a> by <a href="https://iconscout.com/contributors/ibm-design" target="_blank">IBM-Design</a>

					<Project
						icon={Inventory}
						title="Inventory Tracker"
						stack={['React', 'Node.js', 'MySQL']}
					>
						Worked at Sawgrass Nutra Labs, a contract manufacurer
						for suplements, as a Machine Operator. After seeing
						that they were tracking their inventory with Excel I
						decided to build them a better system. I designed and 
						built dashboard views for Sawgrass’s nutraceutical 
						inventory tracking software. Deployed React frontend
						code with AWS S3. Utilized Python AWS Lambda functions 
						and MySQL to build out backend inventory tracking 
						functionality. Added logging to the backend using AWS
						CloudWatch and created reports on user behavior to 
						drive product direction. Allowd Sawgrass to be 5% 
						more eficient in there ordering completion process.
						reduced inventory tracking error by over 13%
					</Project>
				</Row>
			</Section>

			<Section title="Experience">
				<Tabs
					jobs={[
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
					      {
							company: 'Sawgrass NutraLabs',
							items: [
								'Worked as a machine opporator in the wharehouse contributing to production.',
								'While working I saw an opportunity to use what I had learned about software development to improve their buisness processes.',
								'With a friend who is also studying computer science I built a web app that was able to keep better record of thier data.',
								'Improved visibility into inventory and decreased the frequency whith which counts had to be done.',
							],
							location: 'Jacksonville, FL',
							date: 'sept 2020 - Sept 2021',
						},
					      {
							company: 'RF-SMART',
							items: [
								'Worked as a Software Engineering Intern building out an inventory reporting tool.',
								'Helped increase customers visibility in to their inventory by doubleing the number of available reports.',
								'Increased readability of existing code through a refactor, updateing the framework from  Vue2 to Vue3.',
							],
							location: 'Jacksonville, FL',
							date: 'May 2022 - Aug 2022',
						},
					      {
							company: 'RF-SMART',
							items: [
								'Working as a Software Engineering creating modifications for customers.',
								'Helped increase customers visibility in to their inventory by doubleing the number of available reports.',
								'Increased readability of existing code through a refactor, updateing the framework from  Vue2 to Vue3.',
							],
							location: 'Jacksonville, FL',
							date: 'Aug 2022 - Present',
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
							items={['React', 'Node.js', 'Vue']}
						/>
					</Col>
				</Row>
			</Section>
		</div>
	);
}

export default Body;