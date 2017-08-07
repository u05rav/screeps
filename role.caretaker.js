var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports = {
    run: function(creep){

        if(creep.memory.working == true && creep.carry.energy == 0){
            creep.memory.working = false;
        }

        if(creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
            creep.memory.working = true;
        }
            

        if(creep.memory.working){

            var target = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {filter:(s) => s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity});

            if(target == undefined){

                var road = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter:(s) => s.structureType == STRUCTURE_ROAD && s.hits < s.hitsMax});
                if (road == undefined){
                    console.log("caretaker is building");
                    roleBuilder.run(creep);
                }else{
                    if(creep.repair(road) == ERR_NOT_IN_RANGE){
                        console.log("moving to road");
                        creep.moveTo(road);
                    }
                }
            }else if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                console.log("moving to tower");
                creep.moveTo(target);
            }


        }else{
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE){
                console.log("moving to source");
                creep.moveTo(source);
            }
        }
    },

    body: function(energy){

        var cost = 300;
        var size = Math.floor(energy/cost);

        var body = [];

        for (let i=0 ; i<size ; i++){
            body.push(WORK);
            body.push(WORK);
            body.push(CARRY);
            body.push(MOVE);
        }

        return body;
    }
}
