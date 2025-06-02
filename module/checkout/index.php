<?php 
class Checkout{	
	public function index($dt){
		$dt['render_path']="checkout/view_index";
		return $dt;
	}
	
}