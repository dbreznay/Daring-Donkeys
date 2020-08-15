module.exports = function(sequelize, DataTypes) {
    console.log(sequelize.models);
    var Project = sequelize.define("Project", {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [7],
                isNumeric: true
            }
        },
        client: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tasks: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
      });

      Project.associate = function(models) {

        Project.belongsToMany(models.Employee, { through: "ProjectsEmployees" });

    }

    
    return Project;
    
    
};