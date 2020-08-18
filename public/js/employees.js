$(document).ready(function(){

	var emNameInput = $("#em-name");
    var titleInput = $("#em-title");
    var email = $("#em-email");
	var phone = $("#em-phone");
	
	$(document).on("submit", "#employee-form", handleEmployeeFormSubmit);

	function handleEmployeeFormSubmit(event) {
		event.preventDefault();

		if (!emNameInput.val().trim().trim() || !titleInput.val().trim().trim() || !email.val().trim().trim() || !phone.val().trim().trim()) {
            return;
        }

		addEmployee({
            name: emNameInput
                .val()
                .trim()
            ,
                        
            title: titleInput
                .val()
                .trim()
            ,
            email: email
                .val()
                .trim()
            ,
            phone: phone
                .val()
                .trim()
        });

    function addEmployee(employData) {
		console.log(employData)
        $.post("/api/employee", employData)
          .then(function() {
              console.log( employData.name + " Added!");
          });
    }

	}

});