const db =require("../config/db");

exports.getTodos = async (req, res) => {
  try{
    const data = await db.query("SELECT * FROM tb_todos");

    res.json({
      data: data.rows,
    })
  }
  catch(err){
    console.log(err);
    res.status(500)
    .json({ message: err});
  }
}