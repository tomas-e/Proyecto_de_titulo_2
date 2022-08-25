module.exports = (sequelize, DataTypes, Model) => {

    class Mascotas extends Model {}

    Mascotas.init({
        // Model attributes are defined here
        mascota: {
          type: DataTypes.STRING,
          allowNull: false
        },
       
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'mascota' // We need to choose the model name
      });
      
      return Mascotas;
}