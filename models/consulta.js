
module.exports = (sequelize, type)=>{
    return sequelize.define('consulta',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        status:type.STRING, 
        id_medico:type.INTEGER,
        id_usuario:type.INTEGER,
        descripcion:type.STRING,
        fecha_consulta:type.STRING,
        hora_consulta:type.STRING,
    });
}


//status espera|agendada|cancelada|finalizada
