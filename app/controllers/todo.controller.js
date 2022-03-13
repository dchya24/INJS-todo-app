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
    .json({ message: err.message});
  }
}

exports.createTodo = async (req, res) => {
  try{
    const name = req.body.name;

    const query = {
      text: 'INSERT INTO tb_todos(name) VALUES($1)',
      values: [name]
    }

    const execSQL = await db.query(query);

    if(execSQL) res.send({message: "Berhasil membuat todo!"});
  }
  catch(err){
    console.log(err);
    res.status(500)
    .json({ message: err.message});
  }
}