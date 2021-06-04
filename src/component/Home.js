import React, { Component } from 'react'


export default class Home extends Component {
    render() {
        return (
			<div className="container">
			<div className="card">
			
			<div className="server">
				<h3>Application Status</h3>

				<div className="circles">
					<div className="circle-1">
						<span>10</span>
						<p>All</p>
					</div>
					<div className="circle-2">
						<span>6</span>
						<p>Available</p>
					</div>
					<div className="circle-3">
						<span>4</span>
						<p>Cancel</p>
					</div>
				</div>
			</div>

			<div className="server">
				<h3>Server</h3>

				<div className="circles">
					<div className="circle-1">
						<span>4</span>
						<p>All</p>
					</div>
					<div className="circle-2">
						<span>2</span>
						<p>Active</p>
					</div>
					<div className="circle-3">
						<span className="inactive">2</span>
						<p>Inactive</p>
					</div>
				</div>
			</div>

			<div className="server">
				<h3>Health Check Count</h3>
				<div className="circle-4">
					<h1>60</h1>
					<p>Counts</p>
				</div>
			</div>
		</div>


		<div className="row-9 animated slideInDown">  
			<div className="row-9-in">    
				<div className="search-container"><input id="" name="" type="text" class="text-field" placeholder="Enter a search keyword" title="LAST NAME" value=""/></div>
		
				<select name="" id="" class="combo-field" required>
					<option value="" selected>All Application</option>
					<option value="">All Application</option>
					<option value="">Application name 1</option>
					<option value="">Application name 2</option>
				</select>
		
				<select name="" id="" class="combo-field" required>
					<option value="" selected>All Servers</option>
					<option value="">All Servers</option>
					<option value="">Server 1</option>
					<option value="">Server 2</option>
				</select>

				<select name="" id="" class="combo-field" required>
					<option value="" selected>Health check status</option>
					<option value="">All Status</option>
					<option value="">Healthy</option>
					<option value="">Critical</option>
				</select>
			</div>
			
			<div className="tablet-div">
				<div className="entry-table"><i class="fa fa-book"></i> Showing 10 of 5000 entries</div>
		
				<table className="list-table">
					<tr className="title">
					<td width="5%">S/N</td>
					<td width="28%">APPLICATION</td>
					<td width="19%">SERVERS MAPPED</td>
					<td width="21%">LAST SCAN DATE</td>
					<td width="14%">STATUS</td>
					<td width="13%">ACTION</td>
					</tr>
					
					<tr>
			<td>1</td>
			<td id="hook"><div class="status"></div>Application name goes here</td>
			<td id="app">3 Servers</td>
			<td>11/12/2020 3:57:29 PM</td>
			<td><div class="health"><i class="fa fa-check"></i></div>Healthy</td>
			<td><button  class="action-btn" title="View result">View result</button></td>
			</tr>

			<tr>
			<td>2</td>
			<td id="hook"><div class="status"></div>Application name goes here</td>
			<td id="app">3 Servers</td>
			<td>11/12/2020 3:57:29 PM</td>
			<td><div class="health" id="not-healthy"><i class="fa fa-exclamation-triangle"></i></div></td>
			<td><button  class="action-btn" title="View result">View result</button></td>
			</tr>

			<tr>
			<td>3</td>
			<td id="hook"><div class="status"></div>Application name goes here</td>
			<td id="app">2 Servers</td>
			<td>11/12/2020 3:57:29 PM</td>
			<td><div class="health"><i class="fa fa-check"></i></div></td>
			<td><button  class="action-btn" title="View result">View result</button></td>
			</tr>

			<tr>
			<td>4</td>
			<td id="hook"><div class="status"></div>Application name goes here</td>
			<td id="app">2 Servers</td>
			<td>11/12/2020 3:57:29 PM</td>
			<td><div class="health"><i class="fa fa-check"></i></div></td>
			<td><button  class="action-btn" title="View result">View result</button></td>
			</tr>

			<tr>
			<td>5</td>
			<td id="hook"><div class="status" id="type"></div>Application name goes here</td>
			<td id="app">3 Servers</td>
			<td>11/12/2020 3:57:29 PM</td>
			<td><div class="health"><i class="fa fa-check"></i></div></td>
			<td><button  class="action-btn" title="View result">View result</button></td>
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

	


		</div>
		

	
        )
    }
}