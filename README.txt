Direct Landing Assessment for Internship

This assessment asked me to make a form that receive user's input, insert the input into database, and retrieve some 
value into the form based on user's input.

I created the frontend of the form using HTML, CSS, and JavaScript, for the backend I'm using JavaScript, php, and mySQL.
To test my own form website, I'm using localhost to run the program which was produced using XAMPP. For storing the data
inputed by users, I'm using mySQL to access the database and maintain the database using phpMyAdmin.

This form will allow users to input their data and automatically inputed to server database by clicking submit which 
can make an AJAX call. 
For the state field, users don't need to fill it in, they only need to enter the postcode, and the system will automatically 
generate the state based on the postcode.

But I'm facing a problem for the state generator functionality, since its really hard to find the suitable API file for 
generating state based on postcode, so that, I'm using my creativity to make a logical statement that can help to
auto-generate the state based on postcode filled in the form.
Unfortunately, by using this method it is limited only for the test cases provided in this assessment. I am still interested
and very eager to learn more about how to generate the output based on API.

To run this program, you should have XAMPP engine, browser and preferred compiler such as Visual Studio Code.
First of all, you need to install XAMPP engine on your computer, and run the sever and also the SQL database,
secondly you should make the project inside the "htdocs" folder in XAMPP folder, after this, you can compile the code and 
you can see the program by typing http://localhost/'folder name'/'filename.html' on your own browser.

To access the database, you should type http://localhost/phpmyadmin/index.php on your own browser.