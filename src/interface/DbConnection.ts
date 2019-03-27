import * as Sequelize from 'sequelize';

import { ModelInterface } from './ModelInterface';


export interface dBConnection extends ModelInterface{

    sequelize: Sequelize.Sequelize;

}