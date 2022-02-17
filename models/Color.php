<?php

class Color 
{
	private $_db;
	private $_data;

	public function __construct($connection){
		$this->_db = $connection;
	}

	public function findAll(){
		$result = $this->_db->query("SELECT * FROM colors");
		return $result;
	}

	public function findById($id){
		$result = $this->_db->query("SELECT * FROM colors where id={$id}");
		return $result;
	}

	public function set_data($data){
		$this->_data = $data;
	}

	public function store(){
		$color = $this->_data['cor'];
		$result = $this->_db->query("INSERT INTO colors(name) VALUES ('$color')");
		return $result;
	}

	public function delete($id){
		$sql = "DELETE FROM colors WHERE id=?";
		$stmt = $this->_db->getConnection()->prepare($sql);
		$stmt->execute([$id]);

	}

	public function update(){
		$color = $this->_data;
		$stmt = $this->_db->getConnection()->prepare('UPDATE colors SET name = :name WHERE id = :id');
	  	$stmt->execute(array(
	    ':id'   => $this->_data['id'],
	    ':name' => $this->_data['cor']
	  ));
	}
}
