<?php

class Color 
{
	private $_db;
	private $_data;

	public function __construct($connection)
	{
		$this->_db = $connection;
	}

	/*
	 * Metodo responsavel por retornar todos os registros do banco
     * @return object
	*/
	public function findAll()
	{
		$result = $this->_db->query("SELECT * FROM colors")->fetchAll(PDO::FETCH_OBJ);
		return $result;
	}

	/*
	 * Metodo responsavel por retornar um registro do banco, 
	 * passando ID por parametro
	 * @ int id
     * @return stdClass Object
	*/
	public function findById($id)
	{
		$result = $this->_db->query("SELECT * FROM colors where id={$id}")->fetch();
		return $result;
	}

	/*
	 * Metodo responsavel setar os dados vindo do formulario, 
	 * @paramm array
	*/
	public function set_data($data)
	{
		$this->_data = $data;
	}

	/*
	 * Metodo responsavel inserir os dados na base dados 
	 * @paramm array
	*/
	public function store()
	{
		$color = $this->_data['cor'];
		$this->_db->query("INSERT INTO colors(name) VALUES ('$color')");
	}

	/*
	 * Metodo responsavel atualizar os dados na base dados 
	 * @paramm array
	*/
	public function update()
	{
		$color = $this->_data;
		$stmt = $this->_db->getConnection()->prepare('UPDATE colors SET name = :name WHERE id = :id');
	  	$stmt->execute(array(
	    ':id'   => $this->_data['id'],
	    ':name' => $this->_data['cor']
	  ));
	}

	/*
	 * Metodo responsavel deletar um registro na base dados 
	 * @paramm array
	*/
	public function delete($id)
	{
		$sql = "DELETE FROM colors WHERE id=?";
		$stmt = $this->_db->getConnection()->prepare($sql);
		$stmt->execute([$id]);
	}
}