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
		var search = prompt("Would you like to search by height, weight, or eyecolor?");
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
			alert("Please enter height, weight, or eyecolor");
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
  descendents(people, searchName);
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
findDescendents(people, nameID);
}
function findDescendents(people, nameID){
	var filterDecendents = people.filter(function(person){
        if(person.id === nameID()){
            return true;
        }
        else{
            return false;
        }
    });
}



function getAge(people){
	var Userage = prompt("Please enter the users age");
	findAge(people, age);
}
function convertAge(people, Userage, tempAge=[]){
	var today = new Date();
		var dob = new Date();
		var age = today.getFullYear() - dob.getFullYear();
		var m = today.getMonth() - dob.getMonth();
		if (m < 0 || m === 0 && today.getDate() < dob.getDate())
		{
				age--;
		}
		return age;
}
function findAge(people, userAge){
	var searchAge = people.filter(function(person){
        if(person.dob.tostring() === userAge.toLowerCase() || person.dob.toLowerCase() === userAge.toLowerCase()){
            return true;
        }
        else{
            return false;
        }
    });
}
function printAge(people){

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
