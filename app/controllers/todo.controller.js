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

exports.updateTodo = async(req, res, next) => {
  try{
    const id = parseInt(req.params.todoId);
    const oldData = await db.query({
      text: "SELECT * FROM tb_todos WHERE id=$1", 
      values: [id]
    });

    await db.query({
      text: "UPDATE tb_todos SET checked=$1 WHERE id=$2",
      values: [
        !oldData.rows[0].checked,
        id
      ]
    });

    res.send({ message: "Berhasil mengupdate todo!"});
  }catch(err){
    next(err);
  }
  
}