const con =require('../config/db');
const express = require("express");
const router = express.Router();

router.get(`/details`,  (req, res) => {
    let userid =req.params.id
    
    con.query(`SELECT * FROM users `, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      });
  });

router.get(`/details:id`,  (req, res) => {
    let userid =req.params.id
    
    con.query(`SELECT * FROM users where user_id=${userid}`, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      });
  });


  router.post('/insert',(req,res)=>{
      let id=null;
      let name=req.body.name;
      let email=req.body.email;
      let password =req.body.password;
      let image=req.body.image;
      let order= req.body.order;
      let created_at=req.body.created_at;
      let last_logged_in=req.body.last_logged_in;
      var sql = `INSERT INTO users VALUES (${id},'${name}','${email}','${password}','${image}',${order},'${created_at}','${last_logged_in}')`;
  con.query(sql, function (err, result) {
    if (err) 
    {
        return res
              .status(404)
              .json({ success: false, message: "the user not created" });
    }
    else{
        return res
        .status(200)
        .json({ success: true, message: "the user created successful" });
    }
    
  });
  })

router.get(`/image:id`,  (req, res) => {
    let userid =req.params.id
    
    con.query(`SELECT user_image FROM users where user_id=${userid}`, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      });
  });
router.put("/update:id",(req,res)=>{
  let userid=req.params.id;
  let name=req.body.name;
  let email=req.body.email;
  let password =req.body.password;
  let image=req.body.image;
  let order= req.body.order;
  let created_at=req.body.created_at;
  let last_logged_in=req.body.last_logged_in;
  var sql = `UPDATE users SET user_name= '${name}',user_email='${email}',user_password='${password}',user_image='${image}', total_orders=${order},created_at="${created_at}",last_logged_in="${last_logged_in}"WHERE user_id= ${userid}`;
  con.query(sql, function (err, result) {
    if (err) 
    {
      return respo
      .status(404)
      .json({ success: false, message: "not updated" });
    }
    else
    return res
        .status(200)
        .json({ success: true, message: "updated  successful" });{

    }
  });
})

router.delete("/delete:id",(req,res)=>{
    let userid=req.params.id;
    var sql = `DELETE FROM users WHERE address =${userid}`;
  con.query(sql, function (err, result) {
    if (err) 
    {
        return respo
        .status(404)
        .json({ success: false, message: "the user not deleted" });

    }
    else{
       
        return res
        .status(200)
        .json({ success: true, message: "the user deleted successful" });
    }
    
  });
})

  module.exports = router;