//import models
const Enterprise = require('../Entities/Enterprise/Enterprise.model');
const Role = require('../Entities/Role/Role.model');
const User = require('../Entities/User/User.model');
const Driver = require('../Entities/Driver/Driver.model');
const Station = require('../Entities/Station/Station.model');
const City = require('../Entities/City/City.model');
const Origin = require('../Entities/Origin/Origin.model');
const Destination = require('../Entities/Destination/Destination.model');
const Route = require('../Entities/Route/Route.model');
const Bus = require('../Entities/Bus/Bus.model');
const Seat = require('../Entities/Seat/Seat.model');
const Form = require('../Entities/Form/Form.model');
const Ticket = require('../Entities/Ticket/Ticket.model');
const TotalSale = require('../Entities/TotalSale/TotalSale.model');

//Role BelongsTo User || User HasMany Role
User.belongsTo(Role);
Role.hasMany(User);
//User BelongsTo Enterprise || Enterprise HasMany User
User.belongsTo(Enterprise);
Enterprise.hasMany(User);
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
//bus belongTo Driver || Driver hasMany Buses
Bus.belongsTo(Driver);
Driver.hasMany(Bus);
//Seat BelongsTo Bus || Bus HasMany Seat
Seat.belongsTo(Bus);
Bus.hasMany(Seat);
//Form Belongs To Bus || Bus hasMany Form
Form.belongsTo(Bus);
Bus.hasMany(Form);
//Form Belongs To Route || Route hasMany Form
Form.belongsTo(Route);
Route.hasMany(Form);
//Form Belongs To User || User hasMany Form
Form.belongsTo(User);
User.hasMany(Form);
//Ticket Belongs To Route || Route hasMany Tickets
Ticket.belongsTo(Route);
Route.hasMany(Ticket);
//Ticket Belongs To Bus || Bus hasMany Tickets
Ticket.belongsTo(Bus);
Bus.hasMany(Ticket);
//Ticket Belongs To User || User hasMany Tickets
Ticket.belongsTo(User);
User.hasMany(Ticket);
//TotalSale Belongs To Route || Route hasMany TotalSale
TotalSale.belongsTo(Route);
Route.hasMany(TotalSale);
//TotalSale Belongs To Bus || Bus hasMany TotalSale
TotalSale.belongsTo(Bus);
Bus.hasMany(TotalSale);
//TotalSale Belongs To User || User hasMany TotalSale
TotalSale.belongsTo(User);
User.hasMany(TotalSale);
