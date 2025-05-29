function do_form_login(that){
	console.log(`do_form_login()`);
	const mail_element=that.parentNode.querySelector('.user_email');
	const passwd_element=that.parentNode.querySelector('.passwd');
	let user_email=mail_element.value;
	let passwd=passwd_element.value;

	//validasi 
	let err=false;
	if (user_email == '') {
		mail_element.style.borderBottom="1px solid red";
		err=true;
	}
	if (passwd == '') {
		passwd_element.style.borderBottom="1px solid red";
		err=true;
	}

	if (err) {
		console.log(`cek_login() > validasi form > required`);
		return false;
	}

	const data = JSON.stringify({
	  user_email: user_email,
	  user_pass: passwd,
	});

	fetch(localStorage.getItem('base_url')+'/api/do_form_login', {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json; charset=UTF-8',
	  },
	  body: data,
	}).then(response => {
		if (response.ok) {
		  response.text().then(response => {
		    if(tryParseJSONObject(response)){
		      let r=JSON.parse(response);
		      if (r.success) {
		        console.log('do_form_login() > ',r.message);
		        window.location.reload();
		        // window.location.href=getCookie('base_url');
		      }else{
		        console.log(`do_form_login() > success : false > ${r.status}`);
		        that.parentNode.querySelector('.notif_login').innerHTML=r.message;
		      }
		    }
		  });
		}
	});
    return false;
}