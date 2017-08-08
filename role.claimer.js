var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports = {
    run: function(creep){

        console.log("claimer "+creep.name);

        var currentRoom = creep.room.name;

        console.log("currentRoom = "+currentRoom);
        console.log("targetRoom = "+creep.memory.target);
        console.log("working = "+creep.memory.working);

        if(creep.memory.working == true && currentRoom == creep.memory.target){
            creep.memory.working = false;
        }

        if(creep.memory.working == false && currentRoom != creep.memory.target){
            creep.memory.working = true;
        }
            

        if(creep.memory.working){
            creep.moveTo(creep.pos.findClosestByPath(creep.room.findExitTo(creep.memory.target)));
        }else{

            if(creep.room.controller.my){
                roleBuilder.run(creep);
            }else{
                if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE){
                    creep.moveTo(creep.room.controller);
                }
            }
        }
    },

    body: function(energy){

        var cost = 850;
        var size = Math.floor(energy/cost);

        var body = [];

        for (let i=0 ; i<size ; i++){
            body.push(MOVE);
            body.push(MOVE);
            body.push(WORK);
            body.push(CARRY);
            body.push(CLAIM);
        }

        return body;
    }
}
