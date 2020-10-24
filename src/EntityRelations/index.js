//import models
const Enterprise = require('../Entities/Enterprise/Enterprise.model');
const People = require('../Entities/People/People.model');
const Role = require('../Entities/Role/Role.model');
const User = require('../Entities/User/User.model');
const Driver = require('../Entities/Driver/Driver.model');

//User BelongTo People || People HasOne User
People.hasOne(User);
User.belongsTo(People);
//Role BelongsTo User || User HasMany Role
User.belongsTo(Role);
Role.hasMany(User);
//User BelongsTo Enterprise || Enterprise HasMany User
User.belongsTo(Enterprise);
Enterprise.hasMany(User);
//Driver BelongTo People || People HasOne Driver
People.hasOne(Driver);
Driver.belongsTo(People);
//Driver BelongsTo Enterprise || Enterprise HasMany Driver
Driver.belongsTo(Enterprise);
Enterprise.hasMany(Driver);
