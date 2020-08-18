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
                len: [5],
                isNumeric: true
            }
        },
        client: {
            type: DataTypes.TEXT,
            allowNull: false
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