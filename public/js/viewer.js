$(document).ready(function(){
    
    $(document).on("click", "#find-tasks", searchForTasks);

    var taskTable = $("#task-table");

    function searchForTasks(event) {
        event.preventDefault();

        $.get("/api/project", function(data) {
            console.log("Projects", data);
            projects = data;
            showProjResults();
        });

    }

    function showProjResults() {
        console.log(projects);
        taskTable.children().not(":first").remove();
        var showProjects = [];
        for (var i = 0; i < projects.length; i++) {
            showProjects.push(createProjectRows(projects[i]));
        }
        
        taskTable.append(showProjects);
    }

    function createProjectRows(data) {
        console.log(data);
        var projTr = $("<tr>");
        projTr.data("id", data.id);
        projTr.append("<td>" + data.name + "</td>");
        projTr.append("<td>" + data.start + "</td>");
        projTr.append("<td>" + data.start + "</td>");
        return projTr;

    }
});