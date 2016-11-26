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
class Game {
	constructor(){
		this.rooms = [];
		this.actions = [];
		this.variables = [];
	}
};

// Player object
class Player {
	constructor(name){
		this.name = name;
		this.items = [];
		this.x = this.y = this.z = undefined;
	}
}

// Room object
class Room {
	constructor(x, y, z, description){
		this.x = x;
		this.y = y;
		this.z = z;
		this.description = description;
		this.items = [];
		this.exits = [];
		this.visited = false;	// Initialized as non-visited.
	}
	first_enter() {}
	enter() {
		if (!this.visited)
			this.first_enter();
	};
};

// Item object
class Item {
	constructor(name){
		this.name = name;
		this.on = {};   // List of actions on this item
	}
};

// Exit class - rooms can have custom exits, which are basically teleports.
class Exit {
	constructor(id){
		this.id = id;
		this.fail = "";
		this.new_location = "";
		this.equals = "";
	}
}

// Action class - actual verbs that the player can do.
class Action {
	constructor(verb){
		this.verb = verb;
		this.synonyms = [];
		this.succeed = "";
		this.require_inventory = [];
		this.require_here = [];
		this.lose = [];
		this.gain = [];
	}
}

// Initializing the engine and the game state
$(document).ready( function() {

});

