<?php 

/* format route
'url 				| class/method			| hak_akses',
*/

$dt['route']=[
'index 				| Account/login 				| public',
'dashboard 			| Dashboard 					| public',
'checkout 			| Checkout 					    | public',


'not_found			| StaticPage/not_found			| public', 
'access_denied		| StaticPage/access_denied		| public',
'term.html 			| StaticPage/term_page			| public',
'privacy.html 		| StaticPage/privacy_page		| public',
'privacy 			| StaticPage/privacy_page		| public',
'suspend 			| StaticPage/suspend			| public',
'account_not_found	| StaticPage/account_not_found	| public',

'logout				| Account/logout 				| public',
'login_proses		| Account/login_google 			| public',
'bypass_login_admin	| Account/bypass_login_admin	| public',
'hapus_akun			| Account/hapus_akun 			| public',
'register_ulang		| Account/register_ulang		| public',

'profil				| Profil 						| login',
];
