module.exports = function(){
    StructureSpawn.prototype.createCustomCreep = 
        function(energy, role){
            return this.createCreep([WORK,WORK,CARRY,MOVE],undefined, {role:role, working:false});
        }
}
