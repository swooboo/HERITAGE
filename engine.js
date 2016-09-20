/*
	@licstart  The following is the entire license notice for the
	JavaScript code in this page.

	Copyright (C) 2014 - 2015  SylvieLorxu <sylvie@contracode.nl>

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.

	@licend  The above is the entire license notice
	for the JavaScript code in this page.
*/

// Game state object
var Game = function() {
	this.rooms = [];
	this.actions = [];
	this.variables = [];
};

// Room object
var Room = function(x, y, z, description) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.description = description;
	this.items = [];
	this.exits = [];
	this.visited = false;	// Initialized as non-visited.
	this.first_enter = function() {};
	this.enter = function() {
		if (this.visited)
			this.first_enter();
	};
};

// Item object
var Item = function(name) {
	this.name = name;
	this.on = {};   // List of actions on this item
};

// Initializing the engine and the game state
$(document).ready( function() {

});

