import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

class Search extends Component {
	state = {
		searchText: '',
		amount: 20,
		apiUrl: 'https://pixabay.com/api',
		apiKey: '9202240-89fbab64f3d613f515df41c52',
		images: []
	};

	onTextChange = (e) => {
		this.setState({ [e.target.name]: e.target.value }, () => {
			axios
				.get(
					`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
						this.state.searchText
					}&image-type=photo&per-page=${this.state.amount}&safesearch=true`
				)
				.then((res) => this.setState({ images: res.data.hits }))
				.catch((err) => console.log(err));
		});
	};

	onAmountChange = (e, index, value) => this.setState({ amount: value });
	render() {
		console.log(this.state.images);
		return (
			<div>
				<TextField
					name="searchText"
					value={this.state.searchText}
					onChange={this.onTextChange}
					floatingLabelText="Search For Images"
					fullWidth={true}
				/>
				<br />
				<SelectField
					name="amount"
					floatingLabelText="Amount"
					value={this.state.amount}
					onChange={this.amountChange}>
					<MenuItem value={5} primaryText="5" />
					<MenuItem value={10} primaryText="10" />
					<MenuItem value={15} primaryText="15" />
					<MenuItem value={20} primaryText="20" />
					<MenuItem value={50} primaryText="50" />
				</SelectField>
				<br />
			</div>
		);
	}
}

export default Search;
