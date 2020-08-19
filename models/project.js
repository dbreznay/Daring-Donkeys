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
        start: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        end: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: true
            }
        }

    });

    Project.associate = function(models) {

        Project.belongsToMany(models.Employee, { through: "ProjectsEmployees" });

    }
    
    return Project;
    
    
};