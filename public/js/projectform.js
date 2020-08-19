$(document).ready(function(){

var projInput = $("#proj-name");
var clientInput = $("#client-name");
var projNum = $("#project-number");
var start = $("#start-date");
var end = $("#end-date");

    $(document).on("submit", "#project-form", handleProjectFormSubmit);

    function handleProjectFormSubmit(event) {
        event.preventDefault();

        if (!projInput.val().trim().trim() || !clientInput.val().trim().trim() || !projNum.val().trim().trim()) {
            return;
        }

        insertProject({
            name: projInput
                .val()
                .trim()
            ,
                        
            number: projNum
                .val()
                .trim()
            ,
            client: clientInput
                .val()
                .trim()
            ,
            start: start
                .val()
                .trim()
            ,
            end: end
                .val()
                .trim()
        });

    function insertProject(projectData) {
        $.post("/api/project", projectData)
          .then(function() {
              console.log("Project Added!");
          });
    }



    }
});