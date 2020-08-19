$(document).ready(function(){

var projInput = $("#proj-name");
var clientInput = $("#client-name");
var projNum = $("#project-number");
var start = $("#start-date");
var end = $("#end-date");

    $(document).on("submit", "#project-form", handleProjectFormSubmit);

    function handleProjectFormSubmit(event) {
        event.preventDefault();

     

        insertProject({
            name: projInput
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
            console.log(projectData)
            $.post("/api/project", projectData)
            .then(function() {
              console.log("Project Added!");
            });
        }



    }
});