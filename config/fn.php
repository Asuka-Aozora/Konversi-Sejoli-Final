<?php 

function encrypt($data, $key) {
    $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length('AES-256-CBC'));
    $encrypted = openssl_encrypt($data, 'AES-256-CBC', $key, 0, $iv);
    return base64_encode($encrypted . '::' . $iv); // Encode hasil dan IV
}

function decrypt($data, $key) {
    list($encrypted_data, $iv) = explode('::', base64_decode($data), 2);
    return openssl_decrypt($encrypted_data, 'AES-256-CBC', $key, 0, $iv);
}

 
 
function is_serialized($data) {
    // Menggunakan fungsi unserialize untuk memeriksa
    return ($data === 'b:0;' || @unserialize($data) !== false);
}

function safe_unserialize($data) {
    if (is_serialized($data)) {
        return unserialize($data);
    } else {
        return null; 
    }
}

function is_base64($string) {
    // Menggunakan regex untuk memeriksa apakah string adalah base64 yang valid
    return preg_match('/^[A-Za-z0-9+\/=]+$/', $string) && (strlen($string) % 4 === 0);
}

function generate_jwt_token($user_id,$data_opsional='-'){
	$headers = getallheaders();
	// pre($headers);
	$os=$data_opsional;
	$ua=$_SERVER['HTTP_USER_AGENT'];
	$token_arr=[
		$user_id,
		date('Y-m-d H:i:s'),
		$os,
		$ua
	];
	$token_plain=implode('|',$token_arr);
	$token_final=enc($token_plain);
	$token=base64_encode($token_final);
	@$dt['flow'][]='generate_jwt_token() > token : '.$token;
	return $token;
}


function otentikasi_jwt($dt){
	@$dt['flow'][]='otentikasi_jwt() > init';
	if ($dt['err']) {
		@$dt['flow'][]='otentikasi_jwt() > bypass';
		return $dt;
	}

	$headers = getallheaders();

	if (isset($dt['token'])) {
		$headers['Authorization']=$dt['token'];
	}
	
	if (isset($headers['authorization'])) {
		$headers['Authorization']=$headers['authorization'];
	}
	@$dt['flow'][]='otentikasi_jwt() > Authorization : '.$headers['Authorization'];

	if (isset($dt['hak_akses_route']['public']) and $dt['hak_akses_route']['public']==true)  {
		if (isset($dt['hak_akses_route']['login']) and $dt['hak_akses_route']['login']==true)  {

		}else{
			@$dt['flow'][]='otentikasi_jwt() > bypass';
			return $dt;
		}
	}

	// echo $headers['Authorization'];
	if (!isset($headers['Authorization']) or $headers['Authorization']=='null') {
		$authHeader = null; // Header tidak ada
	    $dt['http_code']=401; 
	    $dt['err']=true;
	    $dt['status']='access_denied';
	    $dt['msg']='Token required';
	    @$dt['flow'][]='otentikasi_jwt() > Token required';
	    return $dt;
	};

	//validasi token base64
	if (!is_base64($headers['Authorization'])) {
		$dt['http_code']=401; 
		$dt['err']=true;
	    $dt['status']='token_invalid';
	    $dt['msg']='base64 Invalid';
	    @$dt['flow'][]='otentikasi_jwt() > base64 Invalid';
	    return $dt;
	}
	
	$authHeader = base64_decode($headers['Authorization']);
	$now=date("Y-m-d H:i:s");
	//$now='2024-10-01 21:48:50';
	$token=dec($authHeader);
	$token_arr=explode("|", $token);

	
	//validasi ada 4 param dalam jwt
	if (count($token_arr)!=4) {
		$dt['http_code']=401; 
		$dt['err']=true;
	    $dt['status']='token_invalid';
	    $dt['msg']='Jml Segment Invalid';
	    @$dt['flow'][]='otentikasi_jwt() > Jml Segment Invalid';
	    return $dt;
	}
	
	$dt['user_id']=$token_arr[0];
	@$dt['flow'][]="otentikasi_jwt() > user_id > $dt[user_id]";
	$jwt_time_created=$token_arr[1];
	$jwt_os=$token_arr[2];
	$jwt_ua=$token_arr[3];

	//jika $jwt_os != '-'
	$data_opsional='';
	if ($jwt_os!='-') {
		$data_opsional=$jwt_os;
	}


	//validasi expired time
	$dateTime1 = new DateTime($jwt_time_created);
	$dateTime2 = new DateTime($now);
	$interval = $dateTime1->diff($dateTime2);
	$selisih = ($interval->y * 365 * 24 * 60) + ($interval->m * 30 * 24 * 60) + ($interval->d * 24 * 60) + ($interval->h * 60) + $interval->i; //dalam menit
	if (!isset($dt['token_expired'])) {
		$dt['token_expired']=JWT_EXPIRED_TIME;
	}
	if($selisih > $dt['token_expired']*60){
		if ($data_opsional!='') {
			$otp=$data_opsional;
			q("DELETE FROM wp_usermeta WHERE user_id='$dt[user_id]' and meta_key='token_$otp'");
			$dt['http_code']=401; 
		}
	    $dt['err']=true;
	    $dt['status']='token_expired';
	    $dt['msg']='Token Expired';
	    @$dt['flow'][]='otentikasi_jwt() > Token Expired';
	    return $dt;
	}

	//validasi os
	//$os=$_SERVER['HTTP_SEC_CH_UA_PLATFORM'];
	$os='-';
	if ($data_opsional!='') {
		$os=$data_opsional;
	}
	 
	if ($jwt_os!=$os) {
		$dt['http_code']=401; 
		$dt['err']=true;
	    $dt['status']='token_invalid';
	    $dt['msg']='OS Invalid';
	    @$dt['flow'][]='otentikasi_jwt() > OS Invalid';
	    return $dt;
	}


	//validasi ua
	$ua=$_SERVER['HTTP_USER_AGENT'];
	// echo "$jwt_ua != $ua";
	if ($jwt_ua!=$ua) {
		$dt['http_code']=401; 
		$dt['err']=true;
	    $dt['status']='token_invalid';
	    $dt['msg']='UA inValid';
	    @$dt['flow'][]='otentikasi_jwt() > UA Invalid';
	    return $dt;
	}
	$dt['err']=false;
	$dt['status']='token_valid';
	$dt['msg']='token valid';
	@$dt['flow'][]='otentikasi_jwt() > token valid';

	return $dt;

}

function allow_cors(){
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type, Authorization");

	// Jika metode adalah OPTIONS, cukup kembalikan 200 OK
	if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	    http_response_code(200);
	    exit();
	}
	header('Content-Type: application/json');
}

function selected($value,$value1){
	if($value==$value1){
		return "selected";
	}
}

function checked($value,$value1){
	if($value==$value1){
		return "checked=checked";
	}
}

function curl_post($dt){ 
	if (!isset($dt['api_auth'])) {
		$dt['api_auth']='';
	}
	if (!isset($dt['api_url'])) {
		$dt['api_res']='failed. url empty';
		return $dt;
	}
    if (isset($dt['api_param']) and count($dt['api_param'])>0) {
		$data_string = json_encode($dt['api_param']);
	} 

	$ch = curl_init($dt['api_url']);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST"); 
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FAILONERROR, false);
    curl_setopt($ch, CURLOPT_VERBOSE, 0);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 0);
    curl_setopt($ch, CURLOPT_TIMEOUT, 720);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Authorization: '.$dt['api_auth'])
    );

    $dt['api_res'] = curl_exec($ch);
    $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    return $dt;
}

function curl_get($dt){ 
	
	if (!isset($dt['api_auth'])) {
		$dt['api_auth']='';
	}
	if (!isset($dt['api_url'])) {
		$dt['api_res']='failed. url empty';
		return $dt;
	}
    if (isset($dt['api_param']) and count($dt['api_param'])>0) {
		$data_string = http_build_query($dt['api_param'],1);
		$dt['api_url']=$dt['api_url']."?".$data_string;
	} 

	$ch = curl_init($dt['api_url']);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET"); 
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FAILONERROR, false);
    curl_setopt($ch, CURLOPT_VERBOSE, 0);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 0);
    curl_setopt($ch, CURLOPT_TIMEOUT, 720);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Authorization: '.$dt['api_auth'])
    );

    $dt['api_res'] = curl_exec($ch);
    $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    return $dt;
}

function send_tg_group_ilm($dt){
	if (!isset($dt['chat_id'])) {
		$dt['chat_id']='-1001802701008';
	}
	$token = "6574150245:AAHUF6EaBcuKDasXqlnv09-AblDe-1nDTdQ";
	$data = [
	    'text' => $dt['text'],
	    'chat_id' => $dt['chat_id']
	];
	
	
	$dt['api_url']="https://api.telegram.org/bot$token/sendMessage?" . http_build_query($data) ;
	$ch = curl_init($dt['api_url']);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET"); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FAILONERROR, false);
    curl_setopt($ch, CURLOPT_VERBOSE, 0);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json'
    	)
    );

    $dt['api_res'] = curl_exec($ch);
    $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    return $dt;
}


function wp_generate_password($plainPassword) {
	require_once(__DIR__.'/../lib/class-phpass.php');

	$hasher = new PasswordHash(8, true); 
	$salt = $hasher->gensalt_private($plainPassword);
	return $hashedPassword = $hasher->crypt_private($plainPassword, $salt);
}

function wp_check_password($password, $hash) {
    // The first character of the hash indicates the algorithm to use
    if (strlen($hash) === 34 && $hash[0] === '$' && $hash[1] === 'P') {
    	
        require_once(__DIR__.'/../lib/class-phpass.php');
        $hasher = new PasswordHash(8, true);
        return $hasher->CheckPassword($password, $hash);
    }
    return false;
}

function send_wa_woowa_eco($dt){
	@$dt['flow'][]='send_wa_woowa_eco()';
	$dt['res_api']='';
	if ($dt['pesan']=='') {
		$dt['res_api']='pesan kosong';
		return $dt;
	}
	@$dt['flow'][]='send_wa_woowa_eco() > no_wa : '.$dt['no_wa'];
	$data = array(
	  "phone_no"  => $dt['no_wa'],
	  "key"       => WOOWA_ECO_KEY,
	  "message"   => $dt['pesan'],
	  "skip_link" => True 
	);
	$data_string = json_encode($data);
	$url='https://notifapi.com/send_message';
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_VERBOSE, 0);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 0);
	curl_setopt($ch, CURLOPT_TIMEOUT, 720);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt(
		$ch,
		CURLOPT_HTTPHEADER,
		array(
			'Content-Type: application/json',
			'Content-Length: ' . strlen($data_string)
		)
	);

	$dt['res_api'] = curl_exec($ch);
	@$dt['flow'][]='send_wa_woowa_eco() > res : '.$dt['res_api'];
	curl_close($ch);
	return $dt;
}

function save_log($dt){
	$ip=$_SERVER['REMOTE_ADDR'];
	$ua=$_SERVER['HTTP_USER_AGENT'];
	$siapa=(!empty($dt['log']['siapa'])) ? $dt['log']['siapa'] : $dt['user_id'];
	$siapa_meta=(!empty($dt['log']['siapa_meta'])) ? $dt['log']['siapa_meta'] : $dt['user_nicename'];
	$ngapain=(!empty($dt['log']['ngapain'])) ? $dt['log']['ngapain'] : '';
	$dibutton_apa=(!empty($dt['log']['dibutton_apa'])) ? $dt['log']['dibutton_apa'] : '';
	$fungsi_apa=$dt['class'];

	$endpoint=$dt['get']['uri'];

	$payload_arr['post']=$dt['post'];
	$payload_arr['get']=$dt['get'];
	$payload_arr['payload']=$dt['payload'];
	$payload=json_encode($payload_arr);

	$response=(!empty($dt['res'])) ? json_encode($dt['res']) : '';
	if (!empty($dt['log']['ket'])) {
		$dt['log']['ket']=str_replace("update","updet",strtolower($dt['log']['ket']));
		$dt['log']['ket']=str_replace("insert","inset",strtolower($dt['log']['ket']));
		$dt['log']['ket']=str_replace("select","silect",strtolower($dt['log']['ket']));
		$dt['log']['ket']=str_replace("'","’",strtolower($dt['log']['ket']));
	}
	$ket=(!empty($dt['log']['ket'])) ? $dt['log']['ket'] : '';

	$db=q("INSERT INTO `wp_ilm_log` (`ip`, `user_agent`, `siapa`, `siapa_meta`, `lewat_platform`, `ngapain`, `dibutton_apa`, `fungsi_apa`, `endpoint`, `payload`, `response`, `ket`) VALUES ('$ip', '$ua', '$siapa', '$siapa_meta', 'ilm', '$ngapain', '$dibutton_apa', '$fungsi_apa', '$endpoint', '$payload', '$response', '$ket')");
	return $dt;
}

function generateRandomString($length = 10) {
    return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
}

function cek_remember_me($dt){
	if ($dt['uri1']=='bypass_login_admin') {
		@$dt['flow'][]='cek_remember_me() > bypass_login_admin';
		return $dt;
	}
	if ($dt['err']) {
		@$dt['flow'][]='cek_remember_me() > bypass';
		return $dt;
	}
	@$dt['flow'][]='cek_remember_me() > Init';
	$token=(!empty($_COOKIE['remember_me_token']))?$_COOKIE['remember_me_token']:'';

	if (!empty($dt['hak_akses_route']['public']) and count($dt['hak_akses_route'])==1 ) {
		@$dt['flow'][]='cek_remember_me() > public_access > bypass';
		$dt['err']=true;
		return $dt;
	}

	if ($token!='') {
		$dt['err']=false;
		$dt['token']=$token;
		$dt['token_expired']=24*30; // 30hari
		@$dt['flow'][]='cek_remember_me() > token found';
	}else{
		@$dt['flow'][]='cek_remember_me() > token not found';
	}
	return $dt; 
}
	
function get_user_profile($dt){
	if (!isset($dt['user_id'])) {
		return $dt;
	}
	$user_db=q("SELECT user_nicename,user_email from wp_users where ID='$dt[user_id]'");
	$meta_db=q("SELECT meta_value as profile_pic from wp_usermeta where user_id='$user_id' and meta_key='profile_pic'");
    $dt['user_nicename']=$user_db[0]['user_nicename'];
    $dt['user_email']=$user_db[0]['user_email'];
    $dt['profile_pic']=$meta_db[0]['profile_pic'];
	return $dt;
}

function include_all_module(){
	$module=scandir('module');
	foreach ($module as $k => $v) {
		if ($v=="." or $v=="..") { continue; }
		if (in_array($v,LOAD_MODULE)) {
			if (file_exists('module/'.$v.'/index.php')) {
				include_once('module/'.$v.'/index.php');
			}
		}
	}
}


function otorisasi($dt){
	@$dt['flow'][]='otorisasi() > init';
	
	$dt['err']=true;
	$dt['hak_akses_route']=[];
	
	$dt['class']='';
	$dt['function']='';
	$dt['user_id']='';
	$dt['res']='';
	$dt['res_arr']=[];
	$dt['res_arr']['success']=false;
	
	//konversi route jadi array $dt[role]
	foreach ($dt['route'] as $k => $v) {
	  $arr=explode("|",$v);
	  $uri=trim($arr[0]);
	  $class=trim($arr[1]);
	  $hak_akses_route=trim($arr[2]);
	  if (strpos($hak_akses_route, ",") !== false) {
	  // if (str_contains($hak_akses_route, ",")) {
	  	$arr2=explode(",",$hak_akses_route);
	  	foreach ($arr2 as $k2 => $v2) {
	  		$dt['route_arr'][$uri]['usergroup'][$v2]=true;
	  	}
	  }else{
	  	$dt['route_arr'][$uri]['usergroup'][$hak_akses_route]=true;
	  }
	  $dt['route_arr'][$uri]['class']=$class;

	  	if (strpos($class,"/") !== false) {
			$arr=explode("/",$class);
	  		$dt['route_arr'][$uri]['class']=$arr[0];
			$dt['route_arr'][$uri]['function']=$arr[1];
		}else{
	  		$dt['route_arr'][$uri]['class']=$class;
			$dt['route_arr'][$uri]['function']='index';
		}
	}
	
	//cek route nya terdaftar apa g
	if (!empty($dt['uri1'])) {
		$route_url=$dt['get']['uri'];
		foreach ($dt['route_arr'] as $route_arr => $v) {
			// echo $dt['get']['uri'].' - '.$route_arr.'<br>';
			if (strpos($dt['get']['uri'],$route_arr.'/')!==false) {
				$route_url=$route_arr;
			}
		}
		if(!isset($dt['route_arr'][$route_url]['class'])){
			$dt['err']=true;
			$dt['status']='class_not_found';
			@$dt['flow'][]="otorisasi() > route class not found";
		}else{
			$dt['err']=false;
			$dt['class']=$dt['route_arr'][$route_url]['class'];
			$dt['function']=$dt['route_arr'][$route_url]['function'];
			@$dt['flow'][]="otorisasi() > route class $dt[class] found";
		}
		// pre($dt['flow']);

		if(!empty($dt['route_arr'][$route_url]['usergroup'])){
			$dt['status']='found_route';
			@$dt['flow'][]='otorisasi() > route found';
			$dt['hak_akses_route']=$dt['route_arr'][$route_url]['usergroup'];
			if (!empty($dt['hak_akses_route']['public']) and $dt['hak_akses_route']['public']) {
				$dt['status']='public_access';
				@$dt['flow'][]='otorisasi() > public_access';
			}
			if (!empty($dt['hak_akses_route']['login']) and $dt['hak_akses_route']['login']) {
				$dt['status']='login_access';
				@$dt['flow'][]='otorisasi() > login_access';
			}
			$dt['err']=false;
		}
	} 

	unset($dt['route']);
	unset($dt['route_arr']);
	
	if ($dt['err']) {
		$dt['success']=false;
		$dt['status']='not_found';
		$dt['msg']='Endpoint not found';
		@$dt['flow'][]='otorisasi() > no_route';
	}else{
		$dt['success']=true;
		@$dt['flow'][]='otorisasi() > end';
	}
	return $dt;
	
}

function build_response($dt){
	if (isset($dt['uri1']) and $dt['uri1']=='api') {
		if (DEBUG_FLOW) {
			$dt['res_arr']['flow']=$dt['flow'];
		}
		$dt['res_arr']['success']=$dt['success'];
		$dt['res_arr']['status']=$dt['status'];
		$dt['res_arr']['message']=$dt['msg'];
		if (isset($dt['data'])) {
			$dt['res_arr']['data']=$dt['data'];
		}
		if (isset($dt['meta'])) {
			$dt['res_arr']['meta']=$dt['meta'];
		}
		$code=200;
		if (isset($dt['http_code'])) {
			$code=$dt['http_code'];
		}
		http_response_code($code); 
		echo json_encode($dt['res_arr']);
	}else{
		if ($dt['err']) {
			if ($dt['status']=='access_denied' and $dt['uri1']!='access_denied') {
				header("location: ".BASE_URL.'/access_denied');
			}
			if ($dt['status']=='no_route' and $dt['uri1']!='not_found') {
				header("location: ".BASE_URL.'/not_found');
			}
			if ($dt['status']=='no_role' and $dt['uri1']!='access_denied') {
				header("location: ".BASE_URL.'/access_denied');
			}
		}
		if (isset($dt['render_path'])) {
			echo render($dt['render_path'],$dt);
		}
	}
	return $dt;
}

function otentikasi_user($dt){
	
	@$dt['flow'][]="otentikasi_user() > init";
	$dt['user_role']=[];
	foreach (USER_ROLE as $role => $users) {
		if(in_array($dt['user_id'], $users) ) {
			$dt['user_role'][$role]= true;
			@$dt['flow'][]="otentikasi_user() > user_role : ".json_encode($dt['user_role']);
		}
	};
	//jika tidak mendapat user_role maka dia siswa
	if (count($dt['user_role'])==0) {
		$dt['user_role']['siswa']= true;
	}
	// pre($dt['user_role']);
	// die($dt['user_id']);
	
	if ($dt['err']) {
		@$dt['flow'][]='otentikasi_user() > bypass';
		return $dt;
	}
	
	if (!isset($dt['hak_akses_route']['login'])) {
		if (empty($dt['user_role'])) {
			@$dt['flow'][]="otentikasi_user() > no_role";
			$dt['status']='no_role';
			$dt['msg']='no_role';
			$dt['err']=true;
			$dt['success']=false;
			return $dt;
		}
	}
	
	$dt['status']='access_denied';
	$dt['err']=true;
	$dt['success']=false;
	foreach ($dt['hak_akses_route'] as $k => $v) {
		if ($k=='login') {
			$dt['status']='access_login';
			$dt['err']=false;
			break;
		}
		foreach ($dt['user_role'] as $k1 => $v1) {
			if($k==$k1){
				$dt['status']='access_user_group';
				$dt['err']=false;
				break;
			}
		}
		if (!$dt['err']) {
			$dt['err']=false;
			$dt['success']=true;
			break;
		}
	}
	@$dt['flow'][]="otentikasi_user() > status > $dt[status]";
	return $dt;
}

function call_service($dt){

	if ($dt['err'] and !isset($dt['hak_akses_route']['public'])) {
		@$dt['flow'][]="call_service() > bypass";	
		return $dt;
	}
	@$dt['flow'][]="call_service() > init";	
	$class=$dt['class'];
	$function=$dt['function'];

	if (class_exists($class)) {
		$c=new $class;
		if (method_exists($class,$function)) {
			// pre($dt);
			$dt=$c->$function($dt);
			// @$dt['flow'][]="call class $class/$function"; //bikin error Uncaught Error: Cannot use a scalar value as an array
			$dt['err']=false;
			@$dt['flow'][]="call_service() > ".$class.' => '.$function.'()';	
		}else{
			$dt['err']=true;
			$dt['msg']=$class.' => '.$function.'() method_not_exist';
			@$dt['flow'][]=$dt['msg'];	
		}
	}else{
		$dt['err']=true;
		$dt['msg']=$class.' class_not_exist';
		@$dt['flow'][]=$dt['msg'];
	}

	if ($dt['err']) {
		$res['success']=false;
		$res['msg']=$dt['msg'];
		return $dt;
	}
	return $dt;
}

function debug_flow($dt){
	if (DEBUG_FLOW and $dt['uri1']!='api') {
		echo "<div id='debug_flow' style='position:fixed;top:50px;left:10px;z-index:999;    background: rgba(222, 222, 222, 0.4);
	    padding: 10px;
	    font-size: 10px;
	    border-radius: 10px;'>
		Flow : <pre>".print_r($dt['flow'],1)."</pre>
		</div>";
	}
	return $dt;
}

function strip_tags_content($string) { 
    // ----- remove HTML TAGs ----- 
    $string = preg_replace ('/<[^>]*>/', ' ', $string); 
    // ----- remove control characters ----- 
    $string = str_replace("\r", '', $string);
    $string = str_replace("\n", ' ', $string);
    $string = str_replace("\t", ' ', $string);
    // ----- remove multiple spaces ----- 
    $string = trim(preg_replace('/ {2,}/', ' ', $string));
    return $string; 

}
 
function render($path,$dt) {
    ob_start();
    $file= __DIR__.'/../module/'.$path.'.html';
    include($file);
    $content = ob_get_contents();
    ob_end_clean();
    return $content;
}

function session_start2(){
	if (session_status() === PHP_SESSION_NONE) {
	    session_start();
	}
}

function parsing_input($dt){
	@$dt['flow'][]='parsing_input()';
	$dt['err']=false;
	$dt['msg']="";
	$dt['nav']="";
	
	$dt['payload']=[];
	$payload = json_decode(file_get_contents("php://input"), true);
	if (is_array($payload)) {
		@$dt['flow'][]='parsing_input() > payload json body';
		$dt['payload']=$payload;
		$dt['nav']=(!empty($dt['payload']['nav'])) ? $dt['payload']['nav'] : '';
	}

	$dt['post']=[];
	$dt['get']=[];
	if (!empty($_GET)) {
		@$dt['flow'][]='parsing_input() > GET';
		$dt['get']=$_GET;
		$get_arr=[];
		if (isset($dt['get']['uri'])) {
			$get_arr=explode("?", $dt['get']['uri']);
		}
		if (count($get_arr)>1) {
			$param_get_arr=explode("=",$get_arr[1]);
			$dt['get'][$param_get_arr[0]]=$param_get_arr[1];
			$dt['get']['uri']=$get_arr[0];
		}
		if ($dt['nav']=='') {
			$dt['nav']=(!empty($dt['get']['nav'])) ? $dt['get']['nav'] : '';
		}
	}
	if (!empty($_POST)) {
		@$dt['flow'][]='parsing_input() > POST';
		$dt['post']=$_POST;
		if ($dt['nav']=='') {
			$dt['nav']=(!empty($dt['post']['nav'])) ? $dt['post']['nav'] : '';
		}
	}
	
	// if (!$dt['err']) {
		foreach ($dt['payload'] as $k => $v) {
			if (is_array($v)) {
				continue;
			}
			$v=trim($v ?? '');
			$v=str_replace("'","’",$v);
			$v=str_replace('"',"’",$v);
			if (substr($k, -13,13)=='no_strip_tags') {
				$dt['payload'][$k]=$v;
			}else{
				$dt['payload'][$k]=@strip_tags($v);
			}
		}
		foreach ($dt['get'] as $k => $v) {
			$v=trim($v ?? '');
			$v=str_replace("'","’",$v);
			$v=str_replace('"',"’",$v);
			$dt['get'][$k]=@strip_tags($v);
		}
		
		if (!empty($dt['get']['uri']) and substr($dt['get']['uri'], 0,1)=='/') {
			$dt['get']['uri']=substr($dt['get']['uri'],1,strlen($dt['get']['uri']));
		}
		if (!empty($dt['get']['uri']) and substr($dt['get']['uri'], -1,1)=='/') {
			$dt['get']['uri']=substr($dt['get']['uri'],0,-1);
		}
		if (!empty($dt['get']['uri']) and strpos($dt['get']['uri'], '/') !== false) {
		// if (!empty($dt['get']['uri']) and str_contains($dt['get']['uri'], '/')) {
			$arr=explode("/",$dt['get']['uri']);
			foreach ($arr as $k => $v) {
				if ($v!='') {
					$v=str_replace("'","",$v);
					$v=str_replace('"',"",$v);
					$v=@strip_tags($v);
					$dt['uri'.($k+1)]=$v;
				}
			}
		}else{
			if (empty($dt['get']['uri'])) {
				$dt['get']['uri']="index";
			}
			$dt['uri1']=$dt['get']['uri'];
		}
		foreach ($dt['post'] as $k => $v) {
			$v=trim($v ?? '');
			$v=str_replace("'","’",$v);
			$v=str_replace('"',"’",$v);
			$dt['post'][$k]=@strip_tags($v);
		}	

	
	return $dt;

}

function is_role($dt){
	$r=false;
	switch ($dt['role']) {
		case 'admin':
			$r= (in_array($dt['user_id'], USER_ROLE['admin']) ) ? true : false ;
			break;

		case 'korektor':
			$r= (in_array($dt['user_id'], USER_ROLE['korektor']) ) ? true : false ;
			break;

		case 'cari':
			$dt['user_role']=[];
			foreach (USER_ROLE as $dt['role'] => $role_arr) {
				if(in_array($dt['user_id'], $role_arr) ) {
					$dt['user_role'][$dt['role']]= true;
				}
			}
			return $dt['user_role'];
			break;
		
		default:
			
			break;
	}
	return $r;
}


function is_admin(){
	
	$admin=false;
	if (!empty($_SESSION['user_id']) and in_array($_SESSION['user_id'], USER_ROLE['admin']) ){
		$admin=true;
	}
	
	return $admin;
}


function is_korektor(){
	
	$admin=false;
	if (!empty($_SESSION['user_id']) and in_array($_SESSION['user_id'], USER_ROLE['korektor']) ){
		$admin=true;
	}
	
	return $admin;
}

function is_login($dt=''){
	// pre($dt);
	if ($dt['uri1']=='api') {
		if (isset($dt['payload']['token'])) {
			$dt['token']=$dt['payload']['token'];
			$dt=otentikasi_jwt($dt);
		}
		return true;
	}
	$login=false;
	
	return $login;
}

function cek_session($dt){
	$dt['session']='';
	if (!empty($dt['user_id'])) {
		
		if (!empty($_SESSION['user_id']) and !empty($dt['user_id']) and $_SESSION['user_id']!=$dt['user_id']) {
			
			die('session_invalid');	
		}
		if (empty($_SESSION['user_id'])){
			$dt['session']='invalid';
			return $dt;
		}
		
	}else{
		$dt['session']='invalid';
		return $dt;
	}
	return $dt;
}

function connect_db(){
	$con=mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAMA);
	mysqli_set_charset($con, 'utf8');
	if (!$con) {die('nc db');}
	return $con;
}


function q($sql){ 
	if($sql!=''){
		$dt=array();

		$con=connect_db();
		$q=mysqli_query($con,$sql);

		if (substr(strtolower($sql),0,6)=='select') {
			
			while($r=@mysqli_fetch_assoc($q)){
				$dt[]=$r;
			}
			return $dt;
		}elseif (substr(strtolower($sql),0,4)=='call') {
			if ($q === true or $q === false) {
				return $q;
			}else{
				while($r=@mysqli_fetch_assoc($q)){
					$dt[]=$r;
				}
				return $dt;
			}
			
		}elseif (substr(strtolower($sql),0,6)=='insert') {
			if ($q) {
				$last_id = mysqli_insert_id($con);
				return $last_id;
			}else{
				return false;
			}
		}else{
			return $q;
		}
		mysqli_close($con);
	}
}

function pre($var,$sign=''){
	echo "$sign<pre>".print_r($var,1)."</pre>$sign";
}

function prety_pre($db,$judul=''){
	$pre="<pre style='font-size: 11px;line-height: 12px;'>$judul".print_r($db,1)."</pre>";
	$pre=str_replace("    ","  ",$pre);
	$pre=str_replace("\n    (","",$pre);
	$pre=str_replace("\n    )","",$pre);
	$pre=str_replace(")","",$pre);
	$pre=str_replace("(","",$pre);
	$pre=str_replace("  "," ",$pre);
	$pre=str_replace(" => Array"," ",$pre);
	$pre=str_replace("Array\n","",$pre);
	return $pre;
}


function enc($s,$tipe='array'){
    if ($tipe=='array') {
        $s=serialize($s);
    }
    for( $i = 0; $i < strlen($s); $i++ ){
        $r[] = ord($s[$i]) + 2;
    }
    $a=str_replace("1","_",implode('.', $r));
    $a=str_replace("0",":",$a);
    $a=str_replace("9","-",$a);
    $a=str_replace("5","1",$a);

    $a = encrypt($a, ENC_KEY);
    return $a;
}
 

function dec($s,$tipe='array'){
	$s = decrypt($s, ENC_KEY);
    $s=str_replace("1","5",$s);
    $s=str_replace("-","9",$s);
    $s=str_replace(":","0",$s);
    $s=str_replace("_","1",$s);
    $s = explode(".", $s);
    for( $i = 0; $i < count($s); $i++ ){
        $s[$i] = chr($s[$i] - 2);
    }
    $s=implode('', $s);
    if ($tipe=='array') {
        $s=safe_unserialize($s);
    }
    return $s;
}

function data2table($db){
	$html=""; 
	if (count($db)>0) {
		$html.="<button id='btnExport' onclick='fnExcelReport();' style='width:150px;'>Export excel</button><iframe id='txtArea1' style='display:none'></iframe>";
		$html.="<table border=1 frame=all rules=all id='headerTable' >";
		$html.="<tr>";
			$html.="<th>No</th>";
		foreach ($db[0] as $k => $v) {
			$html.="<th> &nbsp;$k&nbsp; </th>";
		}
		
		$html.="</tr>";

		foreach ($db as $k1 => $v1) {
			$html.="<tr>";
				$html.="<td>".($k1+1)."</td>";
				foreach ($v1 as $k2 => $v2) {
					$html.="<td nowrap >$v2</td>";
				}
			$html.="</tr>";
		}
		$html.="</table>";
	}

	return $html;
}



function validasi_str($str){
	$str=str_replace("'","`",$str);
	$str=str_replace('"',"`",$str);
	return $str;
}

function validasi_uri($ke,$dt){
	if (isset($dt["uri".$ke])) {
		return $dt["uri".$ke];
	}else{
		return false;
	}
}

function validasi_payload($key,$dt){
	if (isset($dt['payload'][$key])) {
		$a=$dt['payload'][$key];
		$a=trim($a);
		$a=str_replace("'","`",$a);
		$a=str_replace('"',"`",$a);
	}else{
		$a='';
	}
	return $a;
}