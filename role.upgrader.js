module.exports = {
    run: function(creep){
        if(creep.memory.working){
            console.log("working");
        }else{
            console.log("not working");
            var source = creep.pos.findClosetsetByPath(FIND_SOURCES_ACTIVE);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE){
                creep.moveTo(source);
            }
        }
    }
}
