module.exports = (sequelize, DataTypes, Model) => {

    class Usuarios extends Model {}

    Usuarios.init({
        // Model attributes are defined here
        nombre: {
          type: DataTypes.STRING,
          allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
          },
       
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'usuario' // We need to choose the model name
      });
      
      return Usuarios;
}