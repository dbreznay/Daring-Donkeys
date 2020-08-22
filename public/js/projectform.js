$(document).ready(function(){

    var projInput = $("#proj-name");
    var employeeSelect = $(".employee-names");
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
                ,
                EmployeeId: employeeSelect.val()
            });
    
            

      ;
    
    
            async function insertProject(projectData) {
                console.log(projectData);
                const project = await $.post("/api/project", projectData)
            
                  console.log("Project Added!", project);           
                  
               
            }


    
        }
    
    
});