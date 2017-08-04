var roleUpgrader = require('role.upgrader');

module.exports = {
    run: function(creep){

        if(creep.memory.working == true && creep.carry.energy == 0){
            creep.memory.working = false;
        }

        if(creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
            creep.memory.working = true;
        }
            

        if(creep.memory.working){

            var target = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {filter:(s) => s.energy < s.energyCapacity});
            if(target == undefined){
                roleUpgrader.run(creep);
            }else if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(target);
            }


        }else{
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE){
                creep.moveTo(source);
            }
        }
    },

    body: function(energy){

        var cost = 300;
        var size = Math.floor(energy/cost);

        var body = [];

        for (let i=0 ; i<size ; i++){
            body.push[WORK];
            body.push[WORK];
            body.push[CARRY];
            body.push[MOVE];
        }
        return body;
    }
}
