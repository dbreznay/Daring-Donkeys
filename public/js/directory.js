$(document).ready(function() {

    var searchName = $("#name-search");
    var employee;
    var space = $(".space");
    var searchResult = $(".employResults");

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
        resultsContainer.addClass("container");
        resultsContainer.addClass("employResults");


        var nameRow = $("<div>");
        nameRow.addClass("row");
        nameRow.addClass("stat");
        nameRow.addClass("name");
        var nameHeader = $("<h3>");
        nameHeader.text("Name: " + data.name);
        nameRow.append(nameHeader);
        resultsContainer.append(nameRow);

        var titleRow = $("<div>");
        titleRow.addClass("row");
        titleRow.addClass("stat");
        var titleHeader = $("<h3>");
        titleHeader.text("Title: " + data.title);
        titleRow.append(titleHeader);
        resultsContainer.append(titleRow);

        var emailRow = $("<div>");
        emailRow.addClass("row");
        emailRow.addClass("stat");
        var emailHeader = $("<h3>");
        emailHeader.text("Email: " + data.email);
        emailRow.append(emailHeader);
        resultsContainer.append(emailRow);


        var phoneRow = $("<div>");
        phoneRow.addClass("row");
        phoneRow.addClass("stat");
        var phoneHeader = $("<h3>");
        phoneHeader.text("Phone: " + data.phone);
        phoneRow.append(phoneHeader);
        resultsContainer.append(phoneRow);
        
        return resultsContainer;

    }
});