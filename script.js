function getFormvalue() {
    //Write your code here
	 const firstName = document.getElementById('form1').value;
    const lastName = document.getElementById('form1').value;
	alert("First Name: " + firstName + "\nLast Name: " + lastName);

}
document.getElementById('form1').addEventListener('submit', getFormValue);

