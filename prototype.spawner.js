
var harvester = require('role.harvester');
var upgrader = require('role.upgrader');
var builder = require('role.builder');
var caretaker = require('role.caretaker');

module.exports = function(){
    StructureSpawn.prototype.createCustomCreep = 
        function(energy, role, targetRoom){

            var body = undefined

            if (role == 'harvester'){
                body = harvester.body(energy);
            }else if (role == 'upgrader'){
                body = upgrader.body(energy);
            }else if (role == 'builder'){
                body = builder.body(energy);
            }else if (role == 'caretaker'){
                body = caretaker.body(energy);
            }
            return this.createCreep(body ,undefined, {role:role, working:false});
        }


}
