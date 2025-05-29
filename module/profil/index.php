<?php 
include_once('service.php');

class Profil{

	public function index($dt){
		$dt['title_page']="Klaim Profil";
		// echo render("hadiah/view_index",$dt);
		return $dt;
	}

	public function save_profil($dt){
		$p=new ProfilService;
		$dt=$p->save_profil($dt);
		return $dt;
	}
}
