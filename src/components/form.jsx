import React from "react";

export default class Form extends React.Component {
    state = {
        email: '',
        agreement: ''
    }

    handleChange(e) {
        let value;
		if (e.target.type === 'checkbox') {
			value = e.target.checked;
		} else {
			value = e.target.value;
		}
		
		const stateName = e.target.name;

		this.setState({[stateName]: value});
    }

    validation(e) {
        e.preventDefault();
        const {email, agreement} = this.state;
        const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{1,})$/i;

        if (!reg.test(email)) {
            alert('Введите правильный email!');
        } else if (!agreement) {
            alert('Примите пользовательское соглашение!');
        } else {
            alert('Данные успешно отправлены!');
            this.setState({
                email: '',
                agreement: false
            });
        }
        console.log(reg.test(email));
    }

    render() {
        const {email, agreement} = this.state;

        return (
            <form onSubmit={(e) => this.validation(e)}>
                <input  onChange={(e) => this.handleChange(e)} name="email" value={email} type="text" />
                <br/>
                <input onChange={(e) => this.handleChange(e)} name="agreement" checked={agreement} type="checkbox" /> Пользовательское соглашение
                <br/>
                <button>Отправить</button>
            </form>
        )
    }
}