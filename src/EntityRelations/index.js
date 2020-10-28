//import models
const Enterprise = require('../Entities/Enterprise/Enterprise.model');
const People = require('../Entities/People/People.model');
const Role = require('../Entities/Role/Role.model');
const User = require('../Entities/User/User.model');
const Driver = require('../Entities/Driver/Driver.model');
const Station = require('../Entities/Station/Station.model');
const City = require('../Entities/City/City.model');
const Origin = require('../Entities/Origin/Origin.model');
const Destination = require('../Entities/Destination/Destination.model');
const Route = require('../Entities/Route/Route.model');
const Bus = require('../Entities/Bus/Bus.model');

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
//Station BelongsTo City || City HasMany Stations
Station.belongsTo(City);
City.hasMany(Station);
//Origin belogsTo Station || Station HasMany Origins
Origin.belongsTo(Station);
Station.hasMany(Origin);
//Destination belongsTo Station || Station HasMany Destinations
Destination.belongsTo(Station);
Station.hasMany(Destination);
//Route belongsTo Destination || Destination HasMany Route
Route.belongsTo(Destination);
Destination.hasMany(Route);
//Route belongsTo Origin || Origin HasMany Route
Route.belongsTo(Origin);
Origin.hasMany(Route);
//Route belongsToMany Bus || Bus BelongsToMany Routes
Route.belongsToMany(Bus, { through: 'BusRoute' });
Bus.belongsToMany(Route, { through: 'BusRoute' });
