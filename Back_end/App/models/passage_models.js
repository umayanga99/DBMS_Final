const mysql=require("./db");

const Passage=function(file){

}

Passage.getPassages=(result)=>{
    // put the sql query
    mysql.query("SELECT * FROM truck_route",(err,res)=>{
        if(err){
            result(err,null);
            return;
        }
        else{
            result(null,res);
            return;
        }
    })
}

module.exports=Passage;