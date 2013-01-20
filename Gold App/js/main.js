// Devin "Lauren" Elder
// MIU Term 1301
// Project 2
// 01/10/2013

window.addEventListener("DOMContentLoaded", function() {
// Global Variables
	var genderValue = "Unspecified"
	var orientationValue = "Unspecified"

// Shortcut Function
	var idValue = function(x) {
		var theElement = document.getElementById(x);
		return theElement;
	};

/* Display Slider Value Functions
	displaySlider = function(amount) {
		var display = idValue("sliderDisplay");
		var sliderValue = amount
		display.innerHTML = sliderValue;
	};*/

// Radio Button Functions
	var getRadioGender = function() {
		var radioOne = document.forms[0].gender;
		for (var i = 0; i < radioOne.length; i++) {
			if (radioOne[i].checked) {
				genderValue = radioOne[i].value;
			}
		};
	};
	var getRadioOrientation = function() {
		var radioTwo = document.forms[0].orientation;
		for (var i = 0; i < radioTwo.length; i++) {
			if (radioTwo[i].checked) {
				orientationValue = radioTwo[i].value;
			}
		};
	};

// Check Box Function
	var getCheckBoxValue = function() {
		if (idValue("favorite").checked) {
			favoriteValue = "Yes";
		} else {
			favoriteValue = "No"
		}
		if (idValue("vehicle").checked) {
			vehicleValue = "Yes";
		} else {
			vehicleValue = "No"
		}
		if (idValue("shared_interests").checked) {
			interestsValue = "Yes";
		} else {
			interestsValue = "No";
		}
		if (idValue("financially_stable").checked) {
			stableValue = "Yes";
		} else {
			stableValue = "No";
		}
		if (idValue("drinks").checked) {
			drinksValue = "Yes";
		} else {
			drinksValue = "No";
		}
		if (idValue("smokes").checked) {
			smokesValue = "Yes";
		} else {
			smokesValue = "No";
		}
		if (idValue("has_kids").checked) {
			hasKidsValue = "Yes";
		} else {
			hasKidsValue = "No";
		}
		if (idValue("wants_kids").checked) {
			wantsKidsValue = "Yes";
		} else {
			wantsKidsValue = "No";
		}
		if (idValue("has_pets").checked) {
			hasPetsValue = "Yes";
		} else {
			hasPetsValue = "No";
		}
	};

// Toggle links Function
	var toggleLinks = function(n) {
		switch(n) {
			case "on":
				idValue("errors").style.display = "none";
				idValue("addUserForm").style.display = "none";
				idValue("clear").style.display = "inline";
				idValue("display").style.display = "none";
				idValue("Add_a_User").style.display = "inline";
				break;
			case "off":
				idValue("errors").style.display = "block";
				idValue("addUserForm").style.display = "inline";
				idValue("clear").style.display = "inline";
				idValue("display").style.display = "inline";
				idValue("Add_a_User").style.display = "inline";
				idValue("item").style.display = "none";
				break;
			default:
				return false;
		};
	};

// Get Data Function
	var getData	= function() {
		if (window.localStorage.length === 0) {
			alert("There is no data in local storage so default data has been entered.");
			autoFillData();
		}
		toggleLinks("on");
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "item");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		idValue("item").style.display = "block";
		for (var i = 0, j = window.localStorage.length; i < j; i++) {
			var makeLi = document.createElement("li");
			var linksLi = document.createElement("li");
			makeList.appendChild(makeLi);
			var key = window.localStorage.key(i);
			var value = window.localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeLi.appendChild(makeSubList);
			getImage(obj.gender[1], obj.orientation[1], makeSubList);
			for(var n in obj) {
				var makeSubLi = document.createElement("li");
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0] + " " + obj[n][1];
				makeSubLi.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			};
		makeItemLinks(window.localStorage.key(i), linksLi);
		};
	};

// Append Results Function
	var appResults	= function(search, browseCat, browseVal, fav) {
		//window.location.reload(idValue("#resultsPage"));
		alert("Here");
		var page = idValue("resultsPage")
		var resultDivOne = idValue("displayResults");
		var resultDivTwo = document.createElement("div");
		resultDivTwo.setAttribute("id", "item");
		var resultList = document.createElement("ul");
		resultDivTwo.appendChild(resultList);
		idValue("resultDivOne").appendChild(resultDivTwo);
		idValue("item").style.display = "block";
		var resultValue = window.localStorage.getItem(key);
		var obj = JSON.parse(resultValue);
		for (var i = 0, j = window.localStorage.length; i < j; i++) {
			if (obj.browseCat[1] == browseVal || obj.fav[1] == Yes) {
				var resultLi = document.createElement("li");
				var resultLinksLi = document.createElement("li");
				resultList.appendChild(resultLi);
				var resultKey = window.localStorage.key(i);
				var resultValue = window.localStorage.getItem(key);
				//var obj = JSON.parse(resultValue);
				var resultSubList = document.createElement("ul");
				resultLi.appendChild(resultSubList);
				getImage(obj.gender[1], obj.orientation[1], resultSubList);
				for(var n in obj) {
					var resultSubLi = document.createElement("li");
					resultSubList.appendChild(resultSubLi);
					var resultOptSubText = obj[n][0] + " " + obj[n][1];
					resultSubLi.innerHTML = resultOptSubText;
					resultSubList.appendChild(resultLinksLi);
				};
			}
		makeItemLinks(window.localStorage.key(i), linksLi);
		};
	};

// Get Image Function
var getImage = function(genderType, oValue, makeSubList) {
	var imageLi = document.createElement("li");
	makeSubList.appendChild(imageLi);
	var newImgOne = document.createElement("img");
	var newImgTwo = document.createElement("img");
	var setSrcOne = newImgOne.setAttribute("src", "img/" + genderType + ".png");
	if (oValue === "Straight") {
		var setSrcTwo = newImgTwo.setAttribute("src", "img/Straight.png");
	}
	if (oValue === "Bisexual") {
		var setSrcTwo = newImgTwo.setAttribute("src", "img/Bisexual.png");
	}
	if (oValue === "Gay" && genderType === "Male") {
		var setSrcTwo = newImgTwo.setAttribute("src", "img/gayMale.png");
	}
	if (oValue === "Gay" && genderType === "Female") {
		var setSrcTwo = newImgTwo.setAttribute("src", "img/gayFemale.png");
	}
	imageLi.appendChild(newImgOne);
	imageLi.appendChild(newImgTwo);
};

// Auto Fill Data Function
	var autoFillData = function() {
		for (var n in json) {
			var id = Math.floor(Math.random() * 1000001);
			window.localStorage.setItem(id, JSON.stringify(json[n]));
		};
	};

// Make Links Function
	var makeItemLinks = function(key, linksLi) {

		// Edit Link
		var editLink = document.createElement("a");
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit User"
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);

		// Break Tag
		var breakTag = document.createElement("br");
		linksLi.appendChild(breakTag);

		// Delete Link
		var deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete User"
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	};

// Store Data Function
	var	storeData = function(key) {
		if (!key) {
			var id				= Math.floor(Math.random() * 1000001);
		} else {
			id = key;
		}
		getRadioGender();
		getRadioOrientation();
		getCheckBoxValue();
		var item				= {};
			item.userName		= ["Username: ", idValue("uname").value];
			item.age			= ["Age: ", idValue("age").value];
			item.city			= ["City: ", idValue("city").value];
			item.website		= ["Dating Website: ", idValue("wsite").value];
			item.contacted		= ["First Contacted: ", idValue("fcontact").value];
			item.gender			= ["Gender: ", genderValue];
			item.orientation	= ["Sexual Orientation: ", orientationValue];
			item.favorite 		= ["Favorite: ", favoriteValue];
			item.vehicle		= ["Has a Vehicle: ", vehicleValue];
			item.interests		= ["Has Shared Interests: ", interestsValue];
			item.stable			= ["Is Financially Stable: ", stableValue];
			item.drinks			= ["Drinks: ", drinksValue];
			item.smokes			= ["Smokes: ", smokesValue];
			item.hasKids		= ["Has Kids: ", hasKidsValue];
			item.wantsKids		= ["Wants Kids: ", wantsKidsValue];
			item.hasPets		= ["Has Pets: ", hasPetsValue];
			item.music			= ["Favorite Music Genre: ", idValue("music").value];
			item.movie			= ["Favorite Movie Genre: ", idValue("movie").value];
			item.compatible		= ["Level of Compatibility: ", idValue("compatibility").value];
			item.notes			= ["Additional Information: ", idValue("comments").value];
		
		window.localStorage.setItem(id, JSON.stringify(item));
		alert("User Saved!");
	};

// Edit Item Function
	var editItem = function() {
		var value = window.localStorage.getItem(this.key);
		var item = JSON.parse(value);

		// Show Form
		toggleLinks("off");
		idValue("display").style.display = "none";

		idValue("uname").value = item.userName[1];
		idValue("age").value = item.age[1];
		idValue("city").value = item.city[1];
		idValue("wsite").value = item.website[1];
		idValue("fcontact").value = item.contacted[1];
		var radioOne = document.forms[0].gender;
		for (var i = 0; i < radioOne.length; i++) {
			if (radioOne[i].value == "Male" && item.gender[1] == "Male") {
				radioOne[i].setAttribute("checked", "checked");
			} else if (radioOne[i].value == "Female" && item.gender[1] == "Female") {
				radioOne[i].setAttribute("checked", "checked");
			}
		};
		var radioTwo = document.forms[0].orientation;
		for (var i = 0; i < radioTwo.length; i++) {
			if (radioTwo[i].value == "Straight" && item.orientation[1] == "Straight") {
				radioTwo[i].setAttribute("checked", "checked");
			} else if (radioTwo[i].value == "Bisexual" && item.orientation[1] == "Bisexual") {
				radioTwo[i].setAttribute("checked", "checked");
			} else if (radioTwo[i].value == "Gay" && item.orientation[1] == "Gay") {
				radioTwo[i].setAttribute("checked", "checked");
			}
		};
		if (item.favorite[1] == "Yes") {
			idValue("favorite").setAttribute("checked", "checked");
		}
		if (item.vehicle[1] == "Yes") {
			idValue("vehicle").setAttribute("checked", "checked");
		}
		if (item.interests[1] == "Yes") {
			idValue("shared_interests").setAttribute("checked", "checked");
		}
		if (item.stable[1] == "Yes") {
			idValue("financially_stable").setAttribute("checked", "checked");
		}
		if (item.drinks[1] == "Yes") {
			idValue("drinks").setAttribute("checked", "checked");
		}
		if (item.smokes[1] == "Yes") {
			idValue("smokes").setAttribute("checked", "checked");
		}
		if (item.hasKids[1] == "Yes") {
			idValue("has_kids").setAttribute("checked", "checked");
		}
		if (item.wantsKids[1] == "Yes") {
			idValue("wants_kids").setAttribute("checked", "checked");
		}
		if (item.hasPets[1] == "Yes") {
			idValue("has_pets").setAttribute("checked", "checked");
		}
		idValue("music").value = item.music[1];
		idValue("movie").value = item.movie[1];
		idValue("compatibility").value = item.compatible[1];
		idValue("comments").value = item.notes[1];
		save.removeEventListener("click", validate);
		idValue("submit").value = "Edit User";
		var editSubmit = idValue("submit");
		editSubmit.value = "Edit User";
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
	};

// Validate Function
	var validate = function(e) {
		var getUname = idValue("uname");
		var getAge = idValue("age");
		var getCity = idValue("city");
		var getWsite = idValue("wsite");

		// Reset Messages
		errMsg.innerHTML = "";
		getUname.style.border = "1px solid black";
		getAge.style.border = "1px solid black";
		getCity.style.border = "1px solid black";
		getWsite.style.border = "1px solid black";

		var msgArry = [];

		// Username Verification
		if (idValue("uname").value === "") {
			var unameError = "Please enter a username.";
			getUname.style.border = "1px solid red";
			msgArry.push(unameError);
		}

		// Age Verification
		if (idValue("age").value === "") {
			var ageError = "Please enter a age for the user.";
			getAge.style.border = "1px solid red";
			msgArry.push(ageError);
		}
		
		// City Verification
		if (idValue("city").value === "") {
			var cityError = "Please enter a city for the user.";
			getCity.style.border = "1px solid red";
			msgArry.push(cityError);
		}

		// Website Verification
		var re = /^\w+(\.\w{2,3})+/;
		if (!(re.exec(getWsite.value))) {
			var wsiteError = "Please enter a website the user is located on.";
			getWsite.style.border = "1px solid red";
			msgArry.push(wsiteError);
		} 

		// Display Error Messages
		if (msgArry.length >= 1) {
			for (var i = 0, j = msgArry.length; i < j; i++) {
				var errTxt = document.createElement("li");
				errTxt.innerHTML = msgArry[i];
				errTxt.style.color = "red";
				errMsg.appendChild(errTxt);
			};
		} else {
			storeData(this.key);
			window.location.reload(idValue("Add_a_User"));
		}
		e.preventDefault();
		return false;
	};

// Delete Item Function
	var deleteItem = function() {
		var ask = confirm("Are you sure you want to delete this user?");
		if (ask) {
			window.localStorage.removeItem(this.key);
			alert("User has been deleted.");
			window.location.reload();
		} else {
			alert("User was not deleted.");
		}
	};

// Clear Data Function
	var clearLocal = function() {
			window.localStorage.clear();
			alert("All users deleted.");
			window.location.reload();
			return false;	
	};

// Delete users confirm function
	var confirmDelete = function() {
		if (window.localStorage.length === 0) {
			alert("There is no data to clear.");
		} else {
			var ask = confirm("Delete all users?");
			if (ask) {
				clearLocal();
			} else {
				alert("Users not deleted.");
			}
		}
	};

// Variable Defaults
	var errMsg = idValue("errors");

// Event Listeners
	var displayLink = idValue("display");
	displayLink.addEventListener("click", getData);
	var clearLink = idValue("clear");
	clearLink.addEventListener("click", confirmDelete);
	var save = idValue("submit");
	save.addEventListener("click", validate);
	var favLink = idValue("favorites", appResults("", "", "", "favorite"));
	favLink.addEventListener("click", appResults("", "", "", ""));
	var maleLink = idValue("browseMale");
	maleLink.addEventListener("click", appResults("", "gender", "Male", ""));
	var femaleLink = idValue("browseFemale");
	femaleLink.addEventListener("click", appResults("", "gender", "Female", ""));
	var straightLink = idValue("browseStraight");
	straightLink.addEventListener("click", appResults("", "orientation", "Straight", ""));
	var bisexualLink = idValue("browseBisexual");
	bisexualLink.addEventListener("click", appResults("", "orientation", "Bisexual", ""));
	var gayLink = idValue("browseGay");
	gayLink.addEventListener("click", appResults("", "orientation", "Gay", ""));
	var hasKidsLink = idValue("browseHasKids");
	hasKidsLink.addEventListener("click", appResults("", "hasKids", "Yes", ""));
	var wantsKidsLink = idValue("browseWantsKids");
	wantsKidsLink.addEventListener("click", appResults("", "wantsKids", "Yes", ""));
	var vehicleLink = idValue("browseVehicle");
	vehicleLink.addEventListener("click", appResults("", "vehicle", "Yes", ""));
	var interestsLink = idValue("browseInterests");
	interestsLink.addEventListener("click", appResults("", "interests", "Yes", ""));
	var stableLink = idValue("browseStable");
	stableLink.addEventListener("click", appResults("", "stable", "Yes", ""));
	var drinksLink = idValue("browseDrinks");
	drinksLink.addEventListener("click", appResults("", "drinks", "Yes", ""));
	var smokesLink = idValue("browseSmokes");
	smokesLink.addEventListener("click", appResults("", "smokes", "Yes", ""));
	var petsLink = idValue("browsePets");
	petsLink.addEventListener("click", appResults("", "hasPets", "Yes", ""));
	
});