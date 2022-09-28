const express = require("express");
const router = new express.Router();
const {Generalmodel} = require("../models_and_schema/models");

// -------get api ------------------

router.get("/", (req, res) => {
  res.send("Hello Ankit");
})


// --------------post api-------------------
router.post("/" , async (req,res)=>{
try {
  const postapi = new Generalmodel(req.body);
  const postresult = await postapi.save();
  res.send(postresult);
  
} catch (error) {
  res.send(error);
}
})

module.exports = router;