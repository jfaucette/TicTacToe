$(document).ready(function() {
$('#submit').click(function(e) {
// Initializing Variables With Form Element Values
var name = $('#name').val();
var email = $('#email').val();
var message= $('#msg').val();
// Initializing Variables With Regular Expressions
var name_regex = /^[a-zA-Z]+$/;
var email_regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
var message_regex = /^[a-zA-Z]+$/;
// To Check Empty Form Fields.
if (name.length == 0) {
$('#head').text("* All fields are mandatory *"); // This Segment Displays The Validation Rule For All Fields
$("#name").focus();
return false;
}
// Validating Name Field.
else if (!name.match(name_regex) || name.length == 0) {
$('#p1').text("* For your name please use alphabets only *"); // This Segment Displays The Validation Rule For Name
$("#name").focus();
return false;
}
// Validating Email Field.
else if (!email.match(email_regex) || email.length == 0) {
$('#p2').text("* Please enter a valid email address *"); // This Segment Displays The Validation Rule For Email
$("#email").focus();
return false;
else if (!message.match(message_regex) || message.length == 0) {
$('#p3').text("* Please enter a valid message *"); // This Segment Displays The Validation Rule For Email
$("#msg").focus();
return false;
} else {
alert("Form Submitted Successfuly!");
return true;
}
});
});