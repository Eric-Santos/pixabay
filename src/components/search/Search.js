import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Search extends Component {
	state = {
		searchText: '',
		amount: 15,
		apiUrl: 'https://pixabay.com/api',
		apiKey: '9202240-89fbab64f3d613f515df41c52',
		images: []
	};
	render() {
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
