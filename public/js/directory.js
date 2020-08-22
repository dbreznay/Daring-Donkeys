$(document).ready(function() {

    var searchName = $("#name-search");
    var employee;
    var space = $(".space");
    

    $(document).on("submit", "#directory-form", searchForEmployee);

    function searchForEmployee(event) {
        event.preventDefault();

        var nameString = searchName.val().trim();

        nameString = "/name/" + nameString;

        $.get("/api/employees" + nameString, function(data) {
            console.log("Employee", data);
            employee = data;
            showResultsTable();
        });

    }

    function showResultsTable() {
        console.log(employee);
        space.empty();
        var showEmployee = [];
        showEmployee.push(createEmployeeInfo(employee));
        space.append(showEmployee);
    }

    function createEmployeeInfo(data) {
        console.log(data);
        var resultsContainer = $("<div>");
       


       
        var nameHeader = $("<h3>");
        nameHeader.text("Name: " + data.name);
        resultsContainer.append(nameHeader);

        
        var titleHeader = $("<h3>");
        titleHeader.text("Title: " + data.title);
        resultsContainer.append(titleHeader);

        
        var emailHeader = $("<h3>");
        emailHeader.text("Email: " + data.email);
        resultsContainer.append(emailHeader);


        
        var phoneHeader = $("<h3>");
        phoneHeader.text("Phone: " + data.phone);
        resultsContainer.append(phoneHeader);
        
        return resultsContainer;

    }
});