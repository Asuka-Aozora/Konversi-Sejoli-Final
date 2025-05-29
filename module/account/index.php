<?php 

class Account{ 

	public function login($dt){
		$dt['render_path']="account/view_login";
		return $dt;
	}
}