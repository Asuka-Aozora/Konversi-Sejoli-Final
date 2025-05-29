

function popup_data(popup_topic){

	let a=[];
	// if (popup_topic=='') {
	// 	a['title']='';
	// 	a['body']='';
	// 	a['button']='';
	// }

	if (popup_topic=='detail_soal_bank_soal') { 
		a['title']='Detail Soal ID <span id="popup_title_detail_soal_id"></span>';
		a['body']=`<div class='text_soal'></div>
			<div class='opsi_jawaban'></div>
			<div class='soal_meta'></div>`;
		a['button']=`<button style="background: darkorange;color: white;margin-right: 3px;" 
			onclick="return edit_soal();" 
			class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >
            <span class="m-auto flex gap-2">Edit</span>
        </button>
        <button style="background: darkorange;color: white;" 
			onclick="return edit_soal();" 
			class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >
            <span class="m-auto flex gap-2">Delete</span>
        </button>`;
    }

	if (popup_topic=='report_form') { 
		a['title']='Lapor Salah Soal';
		a['body']='<div>'+
          	'Ada kesalahan apa pada soal ini ?<br>mohon dijelaskan agar kami perbaiki.Terima kasih'+
      		'</div>'+
      		'<div><textarea id="report_content"></textarea></div>';
		a['button']='<button style="background: darkorange;color: white;" onclick="return fetch_report_soal();" '+
	                'class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Laporkan</span>'+
	             '</button>';
	}

	if (popup_topic=='alert') { 
		a['title']='Info';
		a['body']='<div id=alert_body ></div>';
		a['button']='<button style="background: darkorange;color: white;" onclick="return close_popup();" '+
	                'class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Close</span>'+
	             '</button>';
	}

	if (popup_topic=='jawab_pass') { 
		a['title']='Waktu Habis!!';
		a['body']='<div>'+
          	'Poin Anda berkutang 1'+
      		'</div>';
		a['button']='<button style="background: darkorange;color: white;" onclick="return fetch_1_soal();" '+
	                'class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Lanjut soal berikutnya</span>'+
	             '</button>';
	}

	if (popup_topic=='profile') { 
		a['title']='Profil';
		a['body']=`<div>Usman rubiantoro<br>usman@rubiantoro.com<br>Kelas 12 SMP
		<br>SMP N 2 Kebumen</div>`;
		a['button']='<button style="background: darkorange;color: white;" onclick="return logout_ujian(this);" '+
	                'class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Logout</span>'+
	             '</button>';
	}

	if (popup_topic=='map_soal') { 
		a['title']='<div id="map_soal_judul_popup"></div>';
		a['body']=`<div id='ketentuan_soal_popup'></div><br><hr><br>
			<div id='notif_selesai_ujian' style='font-size:20px;text-align:center;font-weight:bold;'></div>
			
			<div id='map_soal_popup'></div>
			<div id='notif_tombol_selesai' style='font-size:14px;'><br><br>
				<span style='color:blue;'>ℹ️</span> Tombol Selesai akan muncul setelah mengerjakan 50% soal.
				Selemat Mengerjakan<br><br><br></div>`;
		a['button']='<button id="ujian_selesai_btn_popup" style="background: darkorange;color: white;" onclick="return ujian_selesai();" '+
	                'class="hide m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Selesai</span>'+
	             '</button>';
	}

	if (popup_topic=='login_kerjakan_ujian') { 
		a['title']='<div id="popup_ujian_login_judul">Kerjakan Ujian</div>';
		a['body']=`<div>
			<div  id="popup_ujian_login" style='font-size:14px;'>
				
				<div class="open"></div>
				<div class="close"></div>
				<div class="durasi"></div>
				<div class="jml_soal"></div>
				<div class="ruang"></div>
			</div>
			<br>
			<hr>
			<br>
			<div id="login_form_title" align=center style='font-size:16px;'>Login</div>
			<input type=text id='user_id' placeholder='username/email/no hp' value='demo.siswa@gmail.com'><br>
			<input type=password id='passwd' placeholder='password' value='c4lQfTeowz'><br>
			<input type=text id='otp' placeholder='kode ujian' value='GQZ0WE'><br>
			<div id="notif_login_kerjakan_ujian" style="color:red;font-size:12px;"></div><br>
			<a href=# id="lupa_passwd_btn" onclick='lupa_passwd_diklik(this);' style='color:blue'>Lupa password ?</a>
		</div>`;
		a['button']='<button id="mulai_kerjakan_btn" style="background: darkorange;color: white;" onclick="return cek_login();" '+
	                'class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Mulai</span>'+
	             '</button>';
	}

	if (popup_topic=='notif_jadwal_ujian') { 
		a['title']='Ujian belum di buka!!';
		a['body']=`<div id='notif_jadwal_ujian'>
		</div>`;
		a['button']=' ';
	}


	if (popup_topic=='konfirmasi_pinjam') { 
		a['title']='Konfirmasi Peminjaman';
		a['body']='<ol style="list-style: auto;">'+
          	'<li>Nominal pinjaman <b id="nominal_popup"></b></li>'+
      		'<li>Poin jaminan <b id="poin_popup"></b></li>'+
      		'<li>Tanggal jatuh tempo adalah 1 bulan setelah pencairan pinjaman.</li>'+
      		'<li>Pengembalian uang pinjaman bisa juga dengan transfer ke rek admin.</li>'+
      		'<li>Setelah uang pinjaman dikembalikan maka poin yang dijaminkan juga akan kembali.</li>'+
			'<li>Review proses pengajuan pinjaman setiap tgl 10,20,30 setiap bulan.</li>'+
			'<li>Disarankan pinjam untuk keperluan yg urgent.</li>'+
			'<li>Keputusan atas pinjaman diapprove atau ditolak adalah 100% hak admin</li>'+
			'<li>Pastikan <b>No WA</b> Anda tercantum di <b>profil</b> agar bisa di kontak admin.</li>'+
        '</ol>';
		a['button']='<button style="background: darkorange;color: white;" onclick="return fetch_pinjam();" '+
	                'class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Oke Saya Setuju</span>'+
	             '</button>';
	}

	if (popup_topic=='ketentuan_pinjaman') { 
		a['title']='Ketentuan Pinjaman Tanpa Riba';
		a['body']='<ol style="list-style: auto;">'+
          	'<li>Jika sedang kodisi berhutang (di ilm) maka tidak boleh berhutang lagi sampe hutang sebelumnya lunas terlebih dahulu.</li>'+
      		'<li>Jatuh tempo pinjaman 1 bulan</li>'+
      		'<li>Jaminan pinjaman dengan jumlah poin yg tertera. Pastikan poin Anda mencukupi.</li>'+
      		'<li>Pengembalian uang pinjaman bisa juga dengan transfer ke rek admin.</li>'+
      		'<li>Setelah uang pinjaman dikembalikan maka poin yang dijaminkan juga akan kembali.</li>'+
			'<li>Review proses pengajuan pinjaman setiap tgl 10,20,30 setiap bulan.</li>'+
			'<li>Disarankan pinjam untuk keperluan yg urgent.</li>'+
			'<li>Peminjaman pertama hanya bisa 100rb</li>'+
			'<li>Pinjam 200rb akan dibuka jika sudah pernah pinjam 100rb 2x</li>'+
			'<li>Pinjam 300rb akan dibuka jika sudah pernah pinjam 200rb 2x</li> '+
			'<li>Pinjam 500rb akan dibuka jika sudah pernah pinjam 300rb 2x</li>'+
			'<li>Keputusan atas pinjaman diapprove atau ditolak adalah 100% hak admin</li>'+
        '</ol>';
		a['button']='<button onclick="close_popup();" style="background: darkorange;color: white;"  '+
	                'class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Oke Saya Paham</span>'+
	             '</button>';
	}

	if (popup_topic=='ketentuan_target_hadiah') {
		a['title']='Ketentuan Targetkan Hadiah';
		a['body']='<ol style="list-style: auto;">'+
          '<li>Pilih hadiah yang Anda targetkan</li>'+
          '<li>Setelah dipilih klik tombol home kanan bawah</li>'+
          '<li>Kumpulkan poin sampai jumlah poin mencapai poin hadiah.</li>'+
          '<li>Hadiah dapat diklaim jika <b>tepat pas</b> dengan jumlah poin, tidak kurang tidak lebih..</li>'+
          '<li>Quantity <b>hadiah terbatas</b>, jadi siapa cepat klaim, dia yang dapat.</li>'+
          '<li>Jika poin Anda sudah sama dengan poin hadiah, Klik tombol <b>"Klaim Hadiah Sekarang"</b> di halaman home</li>'+
          '<li>Pastikan Anda <b>login</b> terlebih dahulu</li>'+
        '</ol>';
		a['button']='<button onclick="close_popup();" style="background: darkorange;color: white;"  '+
	                'class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Oke Saya Paham</span>'+
	             '</button>';
	}

	if (popup_topic=='set_target_hadiah') {
		a['title']='Set Target Hadiah';
		a['body']='<ol style="">'+
          '<li>Target hadiah <span id="popup_hadiah_nama">xxx</span></li>'+
          '<li>Poin yang dibutuhkan <span id="popup_hadiah_poin">xxx</span></li>'+
          '<li><br></li>'+
          '<li>Kumpulkan poin dengan <b>mengerjakan soal</b> di tombol bawah kanan</li>'+
          '<li>Jika jumlah poin sudah tercapai. Silahkan <b>klaim hadiah di halaman home</b> .</li>'+
        '</ol>';
		a['button']='<button id="popup_set_target_button" onclick="fetch_set_target_hadiah(this,1)" style="background: darkorange;color: white;"  '+
	                'class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Oke Targetkan Hadiah Ini</span>'+
	             '</button>';
	}

	if (popup_topic=='login_button') {
		a['title']='Mohon Login Dulu..';
		a['body']=' ';
		a['button']='<a href="'+localStorage.getItem('base_url')+'/login_proses"><button '+
                'class="ilm-cd-semibold m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
                '<span class="m-auto flex gap-2">'+
                	'<img class="inline"'+
	                    'src="'+localStorage.getItem('base_url')+'/asset/icon/Icons-Google.svg" alt=""'+
	                  '/>Login</span>'+
              '</button></a>';
	}

	if (popup_topic=='list_pesaing') {
		a['title']='User yang men-target ..';
		a['body']=' Mohon tunggu... ';
		a['button']='<button onclick="close_popup();" style="background: darkorange;color: white;" '+
                'class="ilm-cd-semibold m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
                '<span class="m-auto flex gap-2">'+
                	'Close</span>'+
              '</button>';
	}

	if (popup_topic=='list_klaim') {
		a['title']='Daftar klaim hadiah Anda';
		a['body']=' Mohon tunggu... ';
		a['button']='<button onclick="close_popup();" style="background: darkorange;color: white;" '+
                'class="ilm-cd-semibold m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
                '<span class="m-auto flex gap-2">'+
                	'Close</span>'+
              '</button>';
	}

	if (popup_topic=='ketentuan_hadiah') {
		a['title']='Ketentuan Klaim Hadiah';
		a['body']='<ol style="list-style: auto;">'+
          '<li>Lengkapi data di menu <b>profil</b>.</li>'+
          '<li>Quantity <b>hadiah terbatas</b>, jadi siapa cepat klaim, dia yang dapat.</li>'+
          '<li>Jika ada indikasi kecurangan maka klaim hadiah batal.</li>'+
          '<li>Hadiah akan di kirim pada <b>tanggal 10,20,30</b> setiap bulan. Insyaallah</li>'+
          '<li>Jika klaim di approve maka uang <b>Uang</b> akan dikirim ke akun <b>DANA</b></li>'+
          '<li>Uang yg dikirim wajib dibelanjakan sesuai hadiah yg diklaim</li>'+
          '<li>Setelah Klaim berhasil, Poin akan <b>menjadi 0</b>.</li>'+
        '</ol>'+
        '<div id="popup_response"></div>';
		a['button']='<button id="klaim_hadiah_sekarang" onclick="return fetch_klaim_hadiah(this)" style="background: darkorange;color: white;"  '+
	                'class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Oke Klaim Sekarang</span>'+
	             '</button>';
	}

	if (popup_topic=='aturan_kerjakan_soal_random') {
		a['title']="Aturan Mengerjakan Soal";
		a['body']='<ol style="list-style: auto;">'+
	          '<li>Kerjakan soal pilihan ganda yang ada</li>'+
	          '<li>Jawaban benar akan menambah +1 poin</li>'+
	          '<li>Jawaban salah akan mengurangi -4 poin</li>'+
	          '<li>Soal tidak dijawab akan mengurangi -1 poin</li>'+
	          '<li>Sehari maksimal perolehan 100 poin</li>'+
	          '<li>Pastikan Anda <b><a href="https://usman.rubiantoro.com/ilm/login" class="login-btn">login</a></b> agar poin Anda tidak hilang</li>'+
	          '<li>Dilarang menggunakan bot atau berbuat curang</li>'+
	        '</ol>';
	    a['button']='<a href="'+localStorage.getItem('base_url')+'/kerjakan/random"><button style="background: darkorange;color: white;"  '+
	                'class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Mulai</span>'+
	             '</button></a>';
	}

	if (popup_topic=='bayar_sekarang') { 
		a['title']='Cara pembayaran';
		a['body']=`<div>
						<p style="text-align: center; font-size: 14px; color: darkorange">Silahkan transfer ke rekening di bawah ini</p>
						<div id="bank_pembayaran"></div>
					</div>`;
		a['button']=`<button style="background: darkorange;color: white;margin-right: 3px;" 
			onclick="return close_popup();" 
			class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >
            <span class="m-auto flex gap-2">Close</span>
        </button>
        `;
    }

	if (popup_topic=='detail_ujian_setting_guru') {
		a['title']="Detail Ujian";
		a['body']='<div id="popup_detail_ujian_setting_guru"></div>';
		a['button']='<button onclick="return close_popup()" style="background: darkorange;color: white;"  '+
	                'class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Close</span>'+
	             '</button>';
	}

	if (popup_topic=='detail_nilai_siswa') {
		a['title']="Detail Nilai Siswa";
		a['body']='<div id="popup_detail_nilai_siswa"></div>';
		a['button']='<button onclick="return close_popup()" style="background: darkorange;color: white;"  '+
	                'class=" m-auto mt-4 flex w-full rounded-lg border-2 border-ilm-orange py-4" >'+
	                '<span class="m-auto flex gap-2">Close</span>'+
	             '</button>';
	}

	return a;
}