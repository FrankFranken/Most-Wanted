function initSearch(people){
	var search = prompt("Do you know the name you'd like to search?")
	switch(search){
		case "yes":
			getName(people);
			break;
		case "no":
			getAge();
			break;
		default:
			alert("please make valid selection: yes or no");
		initSearch(people);	
	}
}
function getName(people){
	var userName = prompt("enter a first name")
	var userlastName = prompt("enter a last name")
	findName(people, userName, userlastName)
}
function findName(people, userName, userlastName){	
	var searchName = people.filter(function(person){
        if(person.firstName.toLowerCase() == userName.toLowerCase() || person.lastName.toLowerCase() == userName.toLowerCase()){
            return true
        }
        else{
            return false
        }
    });	
    for (var i = 0; i < searchName.length; i++) {
        displayResults(searchName, this.i)
    }
}
function descendent(person, people, descendents=[]){
	;
}
function nextkin(){
	;
}
function family(){
	;
}
function initSearchByTrait(){
	;
}
function displayResults(searchName, i, people){
	alert(people[i]["firstName"] + "" + people[i]["lastName"]);	
}
function isNumeric() {
	;
}
function getAge(){
	;
}
function getHeight(){
	;
}
function getWeight(){
	;
}
function getEye(){
	;
}
function getOccupation(){
	;
}
