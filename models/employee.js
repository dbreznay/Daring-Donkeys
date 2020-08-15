module.exports = function(sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
        name: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
              len: [1]
          }
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [10],
                isNumeric: true
            }
        }

    });

    Employee.associate = function(models) {

        Employee.belongsToMany(models.Project, { through: "ProjectsEmployees" });

    }

    return Employee;
};