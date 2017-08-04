
var harvester = require('role.harvester');
var upgrader = require('role.upgrader');
var builder = require('role.builder');

module.exports = function(){
    StructureSpawn.prototype.createCustomCreep = 
        function(energy, role){

            var body = undefined

            if (role == 'harvester'){
                body = harvester.body(energy);
            }else if (role == 'upgrader'){
                body = upgrader.body(energy);
            }else if (role == 'builder'){
                body = builder.body(energy);
            }

            console.log("body = "+body)

            return this.createCreep(body ,undefined, {role:role, working:false});
        }


}
