const createElem = React.createElement;

class JQSlider extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		
		$(this.refs.$elf).slider({
			change: (event, ui) => this.props.onChange({[this.props.id]: ui.value}),
			slide: (event, ui) => $(this.refs.handle).text(ui.value)
		});
	}
	componentWillUnmount(){
		this.$elf.slider('destroy');
	}
	shouldComponentUpdate(){
		return false;
	}
	render(){
		const handle = createElem('div', {ref: 'handle',className: 'ui-slider-handle'});
		return createElem('div', {id: this.props.id, ref: '$elf', className: 'opinionSlider'}, handle);
	}
}

class Question extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	render(){
		let field;
		switch(this.props.type){
			case 'choice':
				const options = Object.keys(this.props.value).map((e, i) => {
					return createElem('option', {value: i}, this.props.value[e]);
				});
				field = createElem('select', {name: this.props.id, onChange: this.handleChange}, ...options);
				break;
			case 'link':
				field = createElem('input', {value: this.props.value, name: this.props.id, onChange: this.handleChange});
				break;
			case 'opinion':
				field = createElem(JQSlider, {...this.props, onChange: this.props.onChange});
				break;
			default:
				field = createElem('input', {value: this.props.value, name: this.props.id, onChange: this.handleChange});
		}
		return createElem('label', null, this.props.name, ' ', field);
	}

	handleChange(event){
		this.props.onChange({[event.target.name]: event.target.value});
	}
}

class Questionaire extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render(){
		const gTypes = Object.keys(types).map((e, i) => {
			return createElem('option', {value: e}, types[e]);
		});
		const classification = createElem('select', {onChange: this.handleChange}, ...gTypes);
		const traits = Object.keys(Traits).map(e => {
			const trait = {key: e, id: e, ...Traits[e], onChange: this.handleChange};
			return createElem(Question, trait);
		});
		const buttonElem = createElem('input', {type: 'submit', value: 'Get your code'});
		return createElem('form', {onSubmit: this.handleSubmit}, classification, traits, buttonElem);
	}

	handleChange(event){
		console.log(event);
		this.setState(event);
	}
	handleSubmit(event){
		event.preventDefault();
		console.log('submit clicked');
		console.log(this.state);
	}
}

const form = createElem(Questionaire);
ReactDOM.render(form, document.getElementById('container'));

