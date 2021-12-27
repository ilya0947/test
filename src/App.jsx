
import './App.css';
import React, {Component} from 'react';
import Posts from './components/posts';
import Form from './components/form';
import UseState from './components/useState';
import FormWithRefs from './components/formWithRefs';
import UseTimer from './components/useTimer';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			timerActive: true,
			posts: [
				{id: '1qwe', name: 'post1'},
				{id: '2ewq', name: 'post2'},
				{id: '3loi', name: 'post3'}
			],
			sel: '',
			checkbox: false,
			name: ''
		};
		this.delPost = this.delPost.bind(this);
	}
	componentDidMount() {
		this.setState({count: 0 || +localStorage.getItem('count')});
	}

	componentDidUpdate() {
		localStorage.setItem('count', this.state.count);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	handleUp() {
		if (!this.state.timerActive) {
			clearInterval(this.timerId);
			this.setState({timerActive: true});
			document.querySelector('[data-start]').textContent = 'Start';

		} else {
			this.timerId = setInterval(() => {
				this.setState({count: this.state.count + 1});
				
				}, 1000); 
				this.setState({timerActive: false});
				document.querySelector('[data-start]').textContent = 'Stop';
				
		}
	}

	cleareTimer() {
		clearInterval(this.timerId);
		this.setState({count: 0, timerActive: true});
		localStorage.setItem('count', 0);
	}

	delPost(id) {
		// console.log(this.state);
		this.setState({posts: this.state.posts.filter(post => post.id !== id)});
	}

	handleChange(e) {
		let value;
		if (e.target.type === 'checkbox') {
			value = e.target.checked;
			console.log(e.target.type);
		} else {
			value = e.target.value;
		}
		
		const stateName = e.target.name;

		this.setState({[stateName]: value});
	}

	render() {
		const {name, sel, count, posts, checkbox} = this.state;
		
		
		return (
			<>
			<div className="App">
				<div>Timer</div>
				<div>{count}</div>
				<button data-start onClick={() => this.handleUp()}>Start</button>
				<button onClick={() => this.cleareTimer()}>Reset</button>
			</div>

			<Posts posts={posts} cb={this.delPost}/>

			<form>
				<input
				name="name"
				onChange={(e) => this.handleChange(e)}
				value={name}
				placeholder="Ваше имя"
				type="text"/>
				<br/>
				<input value="male" onChange={(e) => this.handleChange(e)} name="gender" type="radio" /> Male
				<br/>
				<input value="female" onChange={(e) => this.handleChange(e)} name="gender" type="radio" /> Female
				<br/>
				<input checked={checkbox} onChange={(e)=> this.handleChange(e)} name="checkbox" type="checkbox"/> yes
				<br/>
				<select name="sel" value={sel} onChange={(e)=> this.handleChange(e)}>
					<option disabled></option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
			</form>
			<br/><br/><br/><br/>
			<Form/>
			<br/><br/><br/>
			<FormWithRefs/>
			<br/><br/><br/>
			<UseState/>
			<br/><br/><br/>
			<UseTimer/>
			<br/><br/><br/>

			</>
		);
	}
}
