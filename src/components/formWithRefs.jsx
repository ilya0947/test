import React from "react";

export default class FormWithRefs extends React.Component {
    constructor() {
        super();

        this.cardRef = React.createRef();
        this.emailRef = React.createRef();
    }

    componentDidMount() {
        this.cardRef.current.focus();
    }

    focusChange(e) {
        if (e.target.value.length > 22) {
            this.emailRef.current.focus();
        }
    }

    mask(e) {
        let matrix = '____  ____  ____  ____',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = e.target.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        e.target.value = matrix.replace(/./g, function(a) {
            // console.log(a);
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
    }

    submit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);

        let obj = {};


        formData.forEach((val, key) => obj[key] = val);

        console.log(obj);
    }

    render() {


        return (
            <form onSubmit={(e) => this.submit(e)}>
                <input
                    onChange={(e) => {this.focusChange(e); this.mask(e)}}
                    name="card"
                    type="text"
                    placeholder="1234  1234  1234  1234"
                    ref={this.cardRef}/>
                <br/>
                <br/>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    ref={this.emailRef}/>
                <br/>
                <br/>
                <button>Отправить</button>
            </form>
        )
    }
}