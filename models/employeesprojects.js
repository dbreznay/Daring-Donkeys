module.exports = function(sequelize, DataTypes) {
  var EmployeesProjects = sequelize.define('EmployeesProjects', {
        projectId: {
          type: DataTypes.INTEGER,
          references: {
            model: Project,
            key: 'id'
          }
        },
        employeeId: {
          type: DataTypes.INTEGER,
          references: {
            model: Employee,
            key: 'id'
          }
        }
  });

  return EmployeesProjects;
};