<?php

class Users
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
		$list_usuario = $this->_db->query("SELECT * FROM users order by id desc");
		return $list_usuario;
	}

	/*
	 * Metodo responsavel por retornar um registro do banco, 
	 * passando ID por parametro
	 * @ int id
     * @return stdClass Object
	*/
	public function findById()
	{
		$list_usuario = $this->_db->query("SELECT * FROM users");
		return $list_usuario;
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
        $sql = 'INSERT INTO users(name, email) VALUES(:name, :email)';		
        $stmt = $this->_db->getConnection()->prepare($sql);
        $stmt->bindValue(':name', $this->_data['name']);
        $stmt->bindValue(':email', $this->_data['email']);
        $stmt->execute();

        $this->_data['id_ultimo_usuario_registrado'] = $this->_db->getConnection()->lastInsertId();
        unset($this->_data['name'], $this->_data['email']);

    	$this->save_color();		
	}

	public function update()
	{
		$stmt = $this->_db->getConnection()->prepare('UPDATE users SET name = :name, email = :email  WHERE id = :id');
		$stmt->execute(array(
			':id'   => $this->_data['id'],
			':name' => $this->_data['name'],
			':email' => $this->_data['email']
		));

		$user_color = new UserColors($this->_db);
		$user_color->set_data($this->_data);
		$user_color->update();
	}

	/*
	 * Metodo responsavel deletar um registro na base dados 
	 * @paramm array
	*/
	public function delete($id)
	{
		$sql = "DELETE FROM users WHERE id=?";
		$stmt = $this->_db->getConnection()->prepare($sql);
		$stmt->execute([$id]);

		$this->delete_color($id);	
	}

	/*
	 * Metodo responsavel deletar  registros da base dados 
	 * @paramm array
	*/
	private function delete_color($id)
	{
		$user_color = new UserColors($this->_db);
		$user_color->delete($id);
	}

	/*
	 * Metodo responsavel inserir  registros da base dados 
	 * @paramm array
	*/
	private function save_color()
	{
		$_uc = new UserColors($this->_db);
		$_uc->set_data($this->_data);
		$_uc->store();
	} 

}