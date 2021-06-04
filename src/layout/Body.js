import React, { Component } from 'react'
//import logo from '../images/logosmartcheck.svg';

export default class Header extends Component {
    render() {
        return (
	<div className="card1">
    <table className='vrt-header'>
	<thead>
	<div className="tdd">

	</div>
	<tr>
		<th>S/N</th>
		<th>APPLICATION</th>
		<th>SERVERS MAPPED</th>
		<th>LAST SCAN DATE</th>
		<th>STATUS</th>
		<th>ACTION</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>1</td>
		<td>Application name goes here</td>
		<td>3 Servers</td>
		<td>11/12/20 3:57:29 PM</td>
		<td><span class="icon"> </span></td>
		<td><button className="button1">View Result</button></td>
	</tr>
	<tr>
		<td>2</td>
		<td>Application name goes here</td>
		<td>2 Servers</td>
		<td>11/12/20 3:57:29 PM</td>
		<td><span class="icon"> </span></td>
		<td><button className="button1">View Result</button></td>
	</tr>
	<tr>
		<td>3</td>
		<td>Application name goes here</td>
		<td>2 Servers</td>
		<td>11/12/20 3:57:29 PM</td>
		<td><span class="icon"> </span></td>
		<td><button className="button1">View Result</button></td>
	</tr>
	<tr>
		<td>4</td>
		<td>Application name goes here</td>
		<td>3 Servers</td>
		<td>11/12/20 3:57:29 PM</td>
		<td><span class="icon"> </span></td>
		<td><button className="button1">View Result</button></td>
	</tr>
	<tr>
		<td>5</td>
		<td>Application name goes here</td>
		<td>3 Servers</td>
		<td>11/12/20 3:57:29 PM</td>
		<td><span class="icon"> </span></td>
		<td><button className="button1">View Result</button></td>
	</tr>
	</tbody>
</table>

</div>


        )
    }
}