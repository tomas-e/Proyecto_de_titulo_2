const { connect } = require('../config/db.config');

const logger = require('../logger/api.logger');

class UsuarioRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync().then(() => {
            console.log("Drop and re-sync db.");
        });
    }

    async getTasks() {
        
        try {
            const tasks = await this.db.tasksUsuario.findAll();
            console.log('tasks:::', tasks);
            return tasks;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createTask(task) {
        let data = {};
        try {
            task.createdate = new Date().toISOString();
            data = await this.db.tasksUsuario.create(task);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateTask(task) {
        let data = {};
        try {
            task.updateddate = new Date().toISOString();
            data = await this.db.tasksUsuario.update({...task}, {
                where: {
                    id: task.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteTask(taskId) {
        let data = {};
        try {
            data = await this.db.tasksUsuario.destroy({
                where: {
                    id: taskId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new UsuarioRepository();