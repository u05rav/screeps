module.exports = {
    run: function(creep){
        if(creep.memory.working){
            console.log("working");
        }else{
            console.log("not working");
        }


    }
}
