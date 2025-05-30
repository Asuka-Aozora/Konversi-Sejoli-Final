<?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// echo $currentTimeoutInSecs = ini_get('session.gc_maxlifetime');
date_default_timezone_set('Asia/Jakarta'); 

define("VERSION","1.0.".rand(1,999999));

define("BASE_URL","http://member.local");
// define("BASE_URL","https://member.otomasics.com");

define("WOOWA_ECO_KEY","f538a366609b3a97ce751087dbc08e961b2ce1dcfe7ac4fb");


define("DEBUG_FLOW",false);
define("TAKEOVER_USER_ID","1");
define("BYPASS_LOGIN_ADMIN",true);
define("JWT_EXPIRED_TIME","6"); // dalam jam
define("ENC_KEY","sipasikjossssss"); // dalam jam

define('LOAD_MODULE',[
  'account',
  'dashboard',
  'device',
  'checkout',
]);

/* nginx conf
location / {
  try_files $uri $uri/ /index.php?uri=$uri&$args;
}

.htaccess
Options +FollowSymLinks
RewriteEngine on

# skip all files and directories from rewrite rules below
RewriteCond %{REQUEST_FILENAME} -d [OR]
RewriteCond %{REQUEST_FILENAME} -f
RewriteRule ^ - [L]
RewriteRule ^(.+)$ index.php?uri=$1 [L,QSA]

*/
