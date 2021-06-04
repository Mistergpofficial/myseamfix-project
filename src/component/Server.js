import React, { Component } from 'react'


export default class Home extends Component {
    render() {
        return (
			<div className="row-9 animated slideInDown">  
			<div className="row-9-in">    
				<div className="search-container"><input id="" name="" type="text" class="text-field" placeholder="Enter a search keyword" title="LAST NAME" value=""/></div>
		
				<select name="" id="" class="combo-field" required>
					<option value="" selected>Active Status</option>
					<option value="">Active</option>
					<option value="">Inactive</option>
					<option value="">All</option>
				</select>
		
				<div className="button">Create Server</div>
			</div>
			
			<div className="tablet-div">
				<div className="entry-table"><i class="fa fa-book"></i> Showing 10 of 5000 entries</div>
		
				<table className="list-table">
					<tr className="title">
						<td width="5%">S/N</td>
						<td width="28%">SERVER NAME</td>
						<td width="19%">IP ADDRESS</td>
						<td width="10%">CPU(%)</td>
						<td width="10%">MEMORY(%)</td>
						<td width="10%">STORAGE(%)</td>
						<td width="13%">ACTION</td>
					</tr>
					
					<tr>
					<td>1</td>
					<td id="hook"><div className="status"></div>Server name goes here</td>
					<td>IP Address goes here</td>
					<td>85.6</td>
					<td>73.9</td>
					<td>50</td>
					<td><button className="action-btn" title="Edit">Edit</button></td>
					</tr>
		
					<tr>
					<td>2</td>
					<td id="hook"><div className="status"></div>Server name goes here</td>
					<td>IP Address goes here</td>
					<td>85.6</td>
					<td>73.9</td>
					<td>50</td>
					<td><button className="action-btn" title="Edit">Edit</button></td>
					</tr>
		
					<tr>
					<td>3</td>
					<td id="hook"><div className="status"></div>Server name goes here</td>
					<td>IP Address goes here</td>
					<td>85.6</td>
					<td>73.9</td>
					<td>50</td>
					<td><button className="action-btn" title="Edit">Edit</button></td>
					</tr>
		
					<tr>
					<td>4</td>
					<td id="hook"><div className="status"></div>Server name goes here</td>
					<td>IP Address goes here</td>
					<td>85.6</td>
					<td>73.9</td>
					<td>50</td>
					<td><button className="action-btn" title="Edit">Edit</button></td>
					</tr>
		
					<tr>
					<td>5</td>
					<td id="hook"><div className="status" id="type"></div>Server name goes here</td>
					<td>IP Address goes here</td>
					<td>85.6</td>
					<td>73.9</td>
					<td>50</td>
					<td><button className="action-btn" title="Edit">Edit</button></td>
					</tr>
		
					
		
				</table>
				<div className="pagination">
					<a href="">Previous</a>
					<a href="">1</a>
					<a class="active" href="">2</a>
					<a href="">3</a>
					<a href="">4</a>
					<a href="">5</a>
					<a href="">6</a>
					<a href="">Next</a>
				</div>
			</div>
		</div>

	
        )
    }
}