<?php 
class Dashboard{	
	public function index($dt){
		$dt['render_path']="dashboard/view_index";
		return $dt;
	}
	
}