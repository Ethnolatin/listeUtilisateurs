var users = [
	{
		id: 4094,
		username: "babar",
		firstName: "Pierre",
		lastName: "Smith",
		email: "pierre.smith@test.com",
		description: "je m'appelle Pierre, blablablabla",
		address: {
			street: "5 rue des Abricotiers",
			zipcode: "37820",
			city: "Boulogne"
		}
	},
	{
		id: 2873,
		username: "",
		firstName: "Julie",
		lastName: "Martin",
		email: "julie.martin@test.com",
		description: "moi c'est Julie, blibliblibli",
		address: {
			street: "34 bis avenue du Parc",
			zipcode: "69300",
			city: "Marseille"
		}
	}
];

var User = {
	init: function (id, username, firstName, lastName, email, description, street, zipcode, city) {
		'use strict';
		this.address = [];
		var addressFields = ['street', 'zipcode', 'city'];
		arguments.forEach(function (arg, key) {
			if (addressFields.indexOf(key) >= 0) {
				this.address[key] = arg;
			} else {
				this[key] = arg;
			}
		});
	}
};

function createCellElt(parent, taille, contenu) {
	'use strict';
	var cellElt = document.createElement("div");
	cellElt.className = "col s" + taille;
	cellElt.textContent = contenu;
	parent.appendChild(cellElt);
}

function createMainElt(code, pseudo, prenom, nom, courriel) {
	'use strict';
	var items = [code, pseudo, prenom, nom, courriel],
		defaultSize = 2,
		size = {},
		divHeadElt = document.createElement("div"),
		divRowElt = document.createElement("div");
	divHeadElt.className = "collapsible-header";
	divRowElt.className = "row";
	size[courriel] = 4;
	items.forEach(function (item) {
		createCellElt(divRowElt, (size[item] || defaultSize), item);
	});
	divHeadElt.appendChild(divRowElt);
	document.getElementById(code).appendChild(divHeadElt);
}

function createMoreElt(code, description, adresse) {
	'use strict';
	var divBodyElt = document.createElement("div"),
		divDescElt = document.createElement("div"),
		divAdresseElt = document.createElement("div");
	divBodyElt.className = "collapsible-body";
	divDescElt.textContent = "Description : " + description;
	divAdresseElt.textContent = "Adresse : " + adresse;
	divBodyElt.appendChild(divDescElt);
	divBodyElt.appendChild(divAdresseElt);
	document.getElementById(code).appendChild(divBodyElt);
}

var ulElt = document.createElement("ul");
ulElt.id = "liste";
ulElt.className = "collapsible";
ulElt.dataCollapsible = "accordion";
document.getElementById("contenu").appendChild(ulElt);
var liElt = document.createElement("li");
liElt.id = "id";
liElt.style.fontWeight = "Bold";
document.getElementById("liste").appendChild(liElt);
createMainElt("id", "Pseudo", "Prénom", "Nom", "Courriel");

users.forEach(function (user) {
	'use strict';
	var liElt = document.createElement("li"),
		add = user.address.street + ", " + user.address.zipcode + " " + user.address.city;
	liElt.id = user.id;
	document.getElementById("liste").appendChild(liElt);
	createMainElt(user.id, user.username, user.firstName, user.lastName, user.email);
	createMoreElt(user.id, user.description, add);
});

var liNewElt = document.createElement("li");
liNewElt.id = "new";
document.getElementById("liste").appendChild(liNewElt);
var divHeadNewElt = document.createElement("div");
divHeadNewElt.className = "collapsible-header";
var divButtonElt = document.createElement("button");
divButtonElt.textContent = "Entrer nouvel utilisateur";
divHeadNewElt.appendChild(divButtonElt);
document.getElementById("new").appendChild(divHeadNewElt);