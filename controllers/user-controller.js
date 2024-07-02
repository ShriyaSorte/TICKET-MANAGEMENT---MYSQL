const mysql = require('mysql');

function adduser(req,res){
    try {
        console.log("Req.body", req.body);
        const {uname, uemail, umobile, gender, age, udesignation, utype, upassword, uisdeleted, ucreatedby, umodifiedby} = req.body;

        const sql = 'INSERT INTO user(uname, uemail, umobile, gender, age, udesignation, utype, upassword, uisdeleted, ucreatedby, umodifiedby) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

        db.query(sql, [uname, uemail, umobile, gender, age, udesignation, utype, upassword, uisdeleted, ucreatedby, umodifiedby], (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).send("An error occurred while adding the user.");
    }

}

function getuser(){
    const query = "SELECT * FROM user";
  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
}

function updateuser(){
    
}
function deleteuser(){

}


module.exports = {adduser,getuser,updateuser,deleteuser};
