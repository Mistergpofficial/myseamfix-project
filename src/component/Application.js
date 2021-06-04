import React, { Component } from 'react'


export default class Application extends Component {
    render() {
        return (
			<div class="row-9 animated slideInDown">  
	<div class="row-9-in">    
		<div class="search-container"><input id="" name="" type="text" class="text-field" placeholder="   Enter a search keyword" title="LAST NAME" value=""/></div>

		<select name="" id="" class="combo-field" required>
			<option value="" selected>Active Status</option>
			<option value="">Active</option>
			<option value="">Inactive</option>
			<option value="">All</option>
		</select>

		<div class="button">Add Application</div>
	</div>
	
	<div class="tablet-div">
		<div class="entry-table"><i class="fa fa-book"></i> Showing 10 of 5000 entries</div>

		<table  class="list-table">
			<tr class="title">
				<td width="5%">S/N</td>
				<td width="20%">APPLICATION NAME</td>
				<td width="19%">APPLICATION TYPE</td>
				<td width="15%">APPLICATION DCSC</td>
				<td width="15%">APPLICATION PORT</td>
				<td width="10%">END PORT</td>
				<td width="10%">HOST/SERVER</td>
				<td width="13%">ACTION</td>
			</tr>
			
			<tr>
			<td>1</td>
			<td id="hook"><div class="status"></div>Application name goes here</td>
			<td>Application type</td>
			<td>Application type</td>
			<td>Application port</td>
			<td>End point</td>
			<td>10.1.101.53</td>
			<td><button  class="action-btn" title="Edit">Edit</button></td>
			</tr>

			<tr>
			<td>2</td>
			<td id="hook"><div class="status"></div>Server name goes here</td>
			<td>Application type</td>
			<td>Application type</td>
			<td>Application port</td>
			<td>End point</td>
			<td>10.1.101.53</td>
			<td><button  class="action-btn" title="Edit">Edit</button></td>
			</tr>

			<tr>
			<td>3</td>
			<td id="hook"><div class="status"></div>Server name goes here</td>
			<td>Application type</td>
			<td>Application type</td>
			<td>Application port</td>
			<td>End point</td>
			<td>10.1.101.53</td>
			<td><button  class="action-btn" title="Edit">Edit</button></td>
			</tr>

			<tr>
			<td>4</td>
			<td id="hook"><div class="status"></div>Server name goes here</td>
			<td>Application type</td>
			<td>Application type</td>
			<td>Application port</td>
			<td>End point</td>
			<td>10.1.101.53</td>
			<td><button  class="action-btn" title="Edit">Edit</button></td>
			</tr>

			<tr>
			<td>5</td>
			<td id="hook"><div class="status" id="type"></div>Server name goes here</td>
			<td>Application type</td>
			<td>Application type</td>
			<td>Application port</td>
			<td>End point</td>
			<td>10.1.101.53</td>
			<td><button  class="action-btn" title="Edit">Edit</button></td>
			</tr>

			

		</table>
		<div class="pagination">
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