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
		var search = prompt("Would you like to search by height, weight, age, occupation, or eyecolor?");
		switch(search){
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
	alert("Match found \nName: " + searchName[0].firstName + " " + searchName[0].lastName +"\nGender: " + searchName[0].gender + "\nOccupation: " + searchName[0].occupation);
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
          alert("Descendents:\n" + descendent[i].firstName + " " + descendent[i].lastName + "\nGender: " + descendent[i].gender + "\nOccupation: " + descendent[i].occupation);
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
	for (var i = 0; i < searchAge.length; i++) {
		if(searchAge.length !== null){
				alert("Age Found:\n\n"+ searchAge[i].firstName + " " + searchAge[i].lastName + "\nAge " + birthDate + "\nGender: " + searchAge[i].gender + "\nOccupation: " + searchAge[i].occupation);
				initSearch(people);
			}
			}
			alert("No matches for this specific age");
			initSearch(people);
		}
function displayResults(searchName, i, people){

}
function nextkin(){

}
function family(){

}
function isNumeric() {

}
function getHeight(people){
	var enterHeight = prompt("Please enter a height");
	setHeight(people, enterHeight);
}
function setHeight(people, enterHeight){
	var convertedHeight=[] = enterHeight / 12;
}
function findHeight(people, enterHeight){
	var searchHeight = people.filter(function(person){
			if(person.firstname.toLowerCase() === userName.toLowerCase() || person.lastName.toLowerCase() === userName.toLowerCase()){
					return true;
			}
			else{
					return false;
			}
	});
	}

function getWeight(){

}
function getEye(){

}
function getOccupation(){

}
