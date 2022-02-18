<?php

class Url  {
	
	private $_rota;

	public function __construct($rota){

		if(isset($rota) && null !==$rota){
			$this->_rota = $rota; 			
		}else{
			$this->_rota = 'lista_usuarios';
		}
	}

	public function get_rota(){
		return $this->_rota ;
	}

}