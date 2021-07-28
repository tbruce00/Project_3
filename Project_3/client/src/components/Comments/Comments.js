import React from 'react';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            comment: '',
        };

    } 

    render() {
        return (
            <form className="commentForm" id="comment-form" onSubmit={this.handleSubmit.bind((this))} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Post what you love about this developer</label>
                    <input type="comment" className="form-control" id="comment" aria-describedby="commentHelp" value={this.state.email} onChange={this.onCommentChange.bind(this)} />
                </div>
                </form>
                
            )}
            onNameChange(event) {
                this.setState({name: event.target.value})
            }
            onCommentChange(event) {
                this.setState({comment: event.target.value})
            }
}