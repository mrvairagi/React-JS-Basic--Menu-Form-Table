import React from 'react'
import {Row, Col} from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import CardSample from './CardSample';
import Forms from './Forms';
import TableSample from './TableSample';


export default function Home() {
	return (
		<>
			<div className='page-header'>
				<h1>Page Heading</h1>
			</div>

			<Row>
				<Col>
					<div className='panel'>
						<CardSample />
					</div>
					
				</Col>
			</Row>
			<Row>
				<Col>
					<div className='panel'>
						<Forms />
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className='panel'>
						<TableSample />
					</div>
				</Col>
			</Row>

			
		</>

	)
}
