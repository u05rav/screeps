module.exports = {
    run: function(creep){

        if(creep.memory.working == true && creep.carry.energy == 0){
            creep.memory.working = false;
        }

        if(creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
            creep.memory.working = true;
        }
            

        if(creep.memory.working){
            console.log("working");
            if(creep.upgraderController(creep.room.controller) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller);
            }
        }else{
            console.log("not working");
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE){
                creep.moveTo(source);
            }
        }
    }
}