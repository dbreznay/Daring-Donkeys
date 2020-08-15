module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define("Schedule", {
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

    Schedule.associate = function(models) {

        Schedule.belongsTo(models.Project, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Schedule;
};