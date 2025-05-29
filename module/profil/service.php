<?php 
class ProfilService{

	

	public function save_profil($dt){

		if (isset($dt['payload']['nicename'])) {
			q("UPDATE wp_users SET user_nicename='".$dt['payload']['nicename']."' WHERE ID='$dt[user_id]'");
		}
		if (isset($dt['payload']['email'])) {
			q("UPDATE wp_users SET user_email='".$dt['payload']['email']."' WHERE ID='$dt[user_id]'");
		}

		if (isset($dt['payload']['no_wa'])) {
			q("UPDATE wp_usermeta SET meta_value='".$dt['payload']['no_wa']."' WHERE meta_key='ilm_no_wa' and user_id='$dt[user_id]'");
		}
		if (isset($dt['payload']['kelas'])) {
			q("UPDATE wp_usermeta SET meta_value='".$dt['payload']['kelas']."' WHERE meta_key='ilm_kelas_id' and user_id='$dt[user_id]'");
		}
		
		$dt['status']='success';
		$dt['success']=true;
		$dt['msg']="Profil berhasil disimpan.";
		return $dt;
	}
}
