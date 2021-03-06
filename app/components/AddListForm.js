const React = require('react');

class AddListForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            createdBy: '',
            name: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })   
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(
            this.state.createdBy,
            this.state.name,
            this.state.description
        )
        this.setState({
            createdBy: '',
            name: '',
            description: ''
        })
    }

    render() {
        return (
            <form className="add-list" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="createdBy" 
                    value={this.state.createdBy}
                    onChange={this.handleChange}
                    placeholder="Your Name" />
                <input 
                    type="text" 
                    name="name" 
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="List Name" />
                <textarea 
                    name="description" 
                    cols="30" rows="10"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="List Description">
                </textarea>
                <div className="actions">
                    <button 
                        className="button"
                        type='submit'>
                        Submit
                    </button>
                    <button onClick={ this.props.onCancel }>Cancel</button>
                </div>
            </form>
        )
    }
}

module.exports = AddListForm;