<?php 
// session_start();

include_once('config/def.php');
include_once('config/fn.php');
include_once('config/role.php');
include_once('config/route.php');
include_all_module();
$dt = parsing_input($dt);
 
$dt = otorisasi($dt);
$dt = cek_remember_me($dt);
$dt = otentikasi_jwt($dt);;
$dt = otentikasi_user($dt);
$dt = call_service($dt);
$dt = build_response($dt);
//pre($dt);die;
$dt = debug_flow($dt);
// die('abcdef');
// session_write_close();
// $dt = save_log($dt);
// a
