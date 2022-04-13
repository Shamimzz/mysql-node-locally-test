var mysql = require('mysql');

var DatabaseConnectionConfig ={ host: "localhost", user: "root", password: "", database: "Demo_1st" }

var con = mysql.createConnection(DatabaseConnectionConfig);

con.connect(function (error){
   if(error){
     console.log("Connection fail")  
   }else{
     console.log("Connection Successfull")  
    //  InsertData(con);
    //  DeleteDataById(con);
    //  UpdateDataBy(con);
    SelectData(con);
   }
});

//.....

function InsertData(){
    let SQLQuery = "INSERT INTO `student_list`(`name`, `class`, `phone`, `city`) VALUES ('SOfic', '40', '01740928', 'Rangpur')"
    con.query(SQLQuery, function (error){
      if(error){
          console.log("Data insert Fail");
      }else{
        console.log("Data insert Success");  
      }
    })
}


function DeleteDataById(con){
    let SQLQuery = "DELETE FROM `student_list` WHERE `id`='3'";
    con.query(SQLQuery, function (error){
      if(error){
        console.log("Data Delete fail")
      }else{
        console.log("Data Delete Success")
      }
    })
}

function UpdateDataBy(con){
    let SQLQuery = "UPDATE `student_list` SET `name`='Rayhan',`class`='12',`city`='lalmoni' WHERE `id`='2'";
    con.query(SQLQuery, function (error){
      if(error){
        console.log("Data Update fail")
      }else{
        console.log("Data Update Success")
      }
    })
}


function SelectData(con){
    let SQLQuery = "SELECT * FROM `student_list`";
    con.query(SQLQuery, function (error, result){
      if(error){
        console.log("Data Select fail");
      }else{
        console.log(result);
      }
    })
}
