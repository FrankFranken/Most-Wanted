function initSearch(people){
	var search = prompt("Do you know the name you'd like to search?");
	switch(search){
		case "yes":
			getName(people);
			break;
		case "no":
			initSearchByTrait(people);
			break;
		default:
			alert("please make valid selection: yes or no");
		initSearch(people);
	}
}
function initSearchByTrait(people){
		var search = prompt("Would you like to search by family, nextofkin, height, weight, age, occupation, or eyecolor?");
		switch(search){
			case "family":
			getFamily(people);
			break;
			case "nextofkin":
			getKin(people);
			break;
			case "height":
			getHeight(people);
			break;
			case "weight":
			getWeight(people);
			break;
			case "eyecolor":
			getEyeColor(people);
			break;
			case "age":
			getAge(people);
			break;
			case "occupation":
			getOccupation(people);
			break;
			default:
			alert("Please enter height, weight, age, occupation, or eyecolor");
			initSearchByTrait(people);
		}
}
function getName(people){
	var userName = prompt("enter a first name");
	var userlastName = prompt("enter a last name");
	findName(people, userName, userlastName);
}
function findName(people, userName, userlastName){
	var searchName = people.filter(function(person){
        if(person.firstName.toLowerCase() === userName.toLowerCase() || person.lastName.toLowerCase() === userName.toLowerCase()){
            return true;
        }
        else{
            return false;
        }
    });
    printSearchName(people, searchName);
}
function printSearchName(people, searchName){
	alert("Match found \nName: " + searchName[0].firstName + " " +
	searchName[0].lastName +"\nGender: " + searchName[0].gender + "\nOccupation: " +
	searchName[0].occupation);
	var decendentsChoice = prompt("Would your like to see this persons decendents? ");
	switch(decendentsChoice){
	case "yes":
  var descendent = descendents(people, searchName);
	printDescendents(descendent, people);
	break;
	case "no":
	initSearch(people);
	break;
	default:
	alert("please enter a valid selection");
	break;
	}
}
function descendents(people, searchName){
var nameID = searchName[0].id;
var descendent = findDescendents(people, nameID, counter =-1, descendentslist=[]);
return descendent;
}
function findDescendents(people, nameID, counter =-1, descendentslist=[]){
	if(nameID !== undefined) {
		var filterDecendents = people.filter(function(person){
          return person.parents.includes(nameID);
      });
      descendentslist.push(...filterDecendents);
      counter++;
			findDescendents(people, descendentslist[counter], counter, descendentslist);
   }
    return descendentslist;
}

function printDescendents(descendent, people){
		for (var i = 0; i < descendent.length; i++) {
			if(descendent.length !== null){
          alert("Descendents:\n" + descendent[i].firstName + " " +
					descendent[i].lastName + "\nGender: " + descendent[i].gender + "\nOccupation: " +
					descendent[i].occupation);
					initSearch(people);
				}
				}
				alert("This person has 0 Descendents");
				initSearch(people);
			}

function getAge(people){
	var userAge = prompt("Please enter the users age");
	convertAge(people, userAge);
}
function convertAge(people, userAge)
{
    var today = new Date();
    var birthDate = parseInt(userAge);
    var age = today.getFullYear() - birthDate;
    var yearBorn = age.toString();
    findAge(people, yearBorn, birthDate);
	}
function findAge(people, yearBorn, birthDate){
	var searchAge = people.filter(function(person){
        if(person.dob.slice(-4) === yearBorn){
            return true;
        }
        else{
            return false;
        }
    });
		printAge(people, searchAge, birthDate);
}
function printAge(people, searchAge, birthDate){
	for (let i = 0; i < searchAge.length; i++) {
		if(searchAge.length !== null){
				alert("Age Found:\n\n"+ searchAge[i].firstName + " " +
				searchAge[i].lastName + "\nAge " + birthDate + "\nGender: " +
				searchAge[i].gender + "\nOccupation: " + searchAge[i].occupation);
			}
		else if(searchAge.length === null){
			alert("No matches for this specific age");
			}
		}
		initSearch(people);
			}
function getWeight(people){
var userWeight = prompt("Please enter a weight to search (must be # of lbs)");
var weight = parseFloat(userWeight);
filterWeight(people, weight);
}
function filterWeight(people, weight){
	var searchWeight = people.filter(function(person){
				if(person.weight === weight){
						return true;
				}
				else{
						return false;
				}
		});
		printWeight(people, searchWeight);
	}
function printWeight(people, searchWeight){
	for (let i = 0; i < searchWeight.length; i++) {
		if(searchWeight.length !== null){
				alert("Weight Found:\n\n"+ searchWeight[i].firstName + " " +
				searchWeight[i].lastName  + "\nGender: " + searchWeight[i].gender + "\nOccupation: " +
				searchWeight[i].occupation);
			}
		else if(searchWeight.length === null){
			alert("No matches for this specific weight");
			}
		}
		initSearch(people);
			}

function getHeight(people){
 var enterHeight = prompt("Please enter a height");
 var newHeight = enterHeight.split("'");
 var removeFeet = newHeight[0];
 var removeInches = newHeight[1].replace('"', '');
 var feet = parseFloat(removeFeet);
 var inch = parseFloat(removeInches);
				findHeight(people, feet, inch);
			}
			function findHeight(people, feet, inch){
				var userHeight = inch + feet * 12;
				var searchHeight = people.filter(function(person){
						if(people.height === searchHeight){
								return true;
						}
						else{
								return false;
						}
				});
			}
function printHeight(people, searchHeight){
	for (let i = 0; i < searchHeight.length; i++) {
		if(searchHeight.length !== null){
				alert("Height Found:\n\n"+ searchHeight[i].firstName + " " +
				searchHeight[i].lastName + "\nAge " + "\nGender: " +
				searchHeight[i].gender + "\nOccupation: " + searchHeight[i].occupation);
			}
		else if(searchHeight.length === null){
			alert("No matches for this specific height");
			}
		}
		initSearch(people);
			}
function getOccupation(people){
	var userOccupation = prompt("Please enter an occupation");
	findOccupation(people, userOccupation);
}
function findOccupation(people, userOccupation){
	var filterOccupation = people.filter(function(people){
		if(people.occupation === userOccupation.toLowerCase()){
        return true;
			}
    });
    printOccupation(people, filterOccupation);
}

function printOccupation(people, filterOccupation){
	for (let i = 0; i < filterOccupation.length; i++) {
		if(filterOccupation.length !== null){
				alert("Occupation Found:\n\n"+ filterOccupation[i].firstName + " " +
				filterOccupation[i].lastName  + "\nGender: " + filterOccupation[i].gender + "\nOccupation: " +
				filterOccupation[i].occupation);
			}
		else if(filterOccupation.length === null){
			alert("No matches for this occupation");
			}
	}
		initSearch(people);
}

function getEyeColor(people){
var eye = prompt("Please enter eye color");
findEyeColor(people, eye);
}
function findEyeColor(people, eye){
	var filterEye = people.filter(function(people){
		if(people.eyeColor === eye.toLowerCase()){
				return true;
			}
		});
		printEyeColor(people, filterEye);
	}
function printEyeColor(people, filterEye){
	for (let i = 0; i < filterEye.length; i++) {
		if(filterEye.length !== null){
				alert("Eye color Found:\n\n"+ filterEye[i].firstName + " " +
				filterEye[i].lastName  + "\nGender: " + filterEye[i].gender + "\nOccupation: " +
				filterEye[i].occupation);
			}
		else if(filterEye.length === null){
			alert("No matches for this eye color");
			}
	}
		initSearch(people);
	}
	function getFamily(people){
		var fName = prompt("enter fist name to find family");
		var lName = prompt("enter last name to find family");
		var Name = findUserFamilyName(people, fName, lName);
		}
function findUserFamilyName(people, fName, lName){
	var searchNames = people.filter(function(person){
				if(person.firstName.toLowerCase() === fName.toLowerCase() && person.lastName.toLowerCase() === lName.toLowerCase()){
						return person.firstName && person.lastName;
				}
			});

				var nID = searchNames[0].id; {
	var searchChildren = people.filter(function(person){
		if(person.parents[0] === nID){
					return person.firstName && person.lastName;
				}
			});

	var searchSpouse = people.filter(function(person){
				if(person.currentSpouse === nID){
					return person.firstName && person.lastName;
				}
			});
			for (var i = 0; i < 1; i++) {
				alert("Family Members: \n\n" + searchNames[0].firstName + " " + searchNames[0].lastName + " \n" +
				searchChildren[0].firstName + " " + searchChildren[0].lastName + " \n" +
				searchSpouse[0].firstName + " " + searchSpouse[0].lastName);
			}
		}
	}
