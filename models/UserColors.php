<?php

class UserColors
{
	private $_db;
	private $_data;

	public function __construct($connection){
		$this->_db = $connection;
	}

	public function set_data($data){
		$this->_data = $data;
	}

	public function store(){
		$id_usuario = isset($this->_data['id_ultimo_usuario_registrado'])? $this->_data['id_ultimo_usuario_registrado']:$this->_data['id'];
		foreach($this->_data['color_id'] as $id){
			$sql = "INSERT INTO user_colors(user_id, color_id) VALUES (:user_id, :color_id)";
			$stmt = $this->_db->getConnection()->prepare($sql);
			$stmt->bindValue(':user_id', $id_usuario);
			$stmt->bindValue(':color_id', $id);
			$stmt->execute();
		}
	}

	public function findByIdUser($id){
		$result = $this->_db->query("select u.id,u.name as user,u.email, co.id as color_id,co.name from user_colors as uc
			inner join users as u on  uc.user_id = u.id    
			inner join colors as co on  uc.color_id = co.id    
			where uc.user_id={$id}");
		return $result;
	}

	public function update()
	{
		$this->delete($this->_data['id']);
		$this->store();		
	}

	public function delete($id){
		$sql = "DELETE FROM user_colors WHERE user_id=?";
		$stmt = $this->_db->getConnection()->prepare($sql);
		$stmt->execute([$id]);
	}

	public function findByIdColorJoin($id){
		$result = $this->_db->query("select co.id,u.name as user,u.email, co.name from user_colors as uc
			inner join users as u on  uc.user_id = u.id    
			inner join colors as co on  uc.color_id = co.id    
			where uc.color_id={$id} ");
		return $result;
	}
}