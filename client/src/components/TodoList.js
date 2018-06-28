import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';


class TodoList extends Component {
	state = {
		items: [
			{ id: uuid(), name: 'WS' },
			{ id: uuid(), name: 'Node' },
			{ id: uuid(), name: 'React' },
			{ id: uuid(), name: 'Deployment' },
			{ id: uuid(), name: 'RPC' },
		]
	}
	render() {
		const { items } = this.state;
		return (
			<Container>
				<Button
					color="dark"
					style={{ marginBottom: '2rem' }}
					onClick={() => {
						const name = prompt('enter Item');
						if (name) {
							this.setState(state => ({
								items: [...state.items, { id: uuid(), name }]
							}));
						}
					}}
				> Add Item </Button>

				<ListGroup>
					<TransitionGroup className="todo-list">
						{items.map(({ id, name }) => (
							<CSSTransition key={id} timeout={500} classNames="fade">
								<ListGroupItem>
									<Button
										className="remove-btn"
										color="danger"
										size="sm"
										style={{ marginRight: '1rem' }}
										onClick={() => {
											this.setState(state => ({
												items: state.items.filter(item => item.id !== id)
											}))
										}}
									>&times;</Button>
									{name}
								</ListGroupItem>
							</CSSTransition>
						))}
					</TransitionGroup>
				</ListGroup>
			</Container>
		);
	}
}
export default TodoList;