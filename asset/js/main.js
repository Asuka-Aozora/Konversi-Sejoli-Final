document.addEventListener("DOMContentLoaded", function(event) { 

    localStorage.setItem("theme-color","theme-3");
    localStorage.setItem("layout","side-menu");
    localStorage.setItem("theme","icewall");

    if(document.getElementById("loading_awal")){ 
        setTimeout(function(){
            document.getElementById("loading_awal").remove();
        },1000);
    }
    
    localStorage.setItem("base_url", "http://server.local:8082");
    localStorage.setItem("base_url_api", "http://localhost:4000");
    load_page_url();

    if(document.getElementById("loading_awal")){ 
        setTimeout(function(){
            document.getElementById("loading_awal").remove();
        },1000);
    }

    //tombol profil di top menu kanan atas tanda tanya
     
    //tombol close di pojokan popup
    if (document.getElementById("popup_close")) {
        document.getElementById("popup_close").addEventListener("click", function(event){
            close_popup();
            return false;
        });
    }

    //tombol close di pojokan popup
    if (document.getElementById("popup_close_top")) {
        document.getElementById("popup_close_top").addEventListener("click", function(event){
            close_popup('top');
            return false;
        });
    }
    
});

function load_page_url(){
    var url = window.location.href;
    var segments = url.split('/').slice(3);
    
    var page = segments.join('/');
    console.log(page);
    if (window.location.href.includes('/' + page)) {
        load_page(page);
    }else{
        load_page('dashboard');
    }
}
 
function side_menu_click(that,page){
    // document.querySelectorAll(".top-nav li a").forEach(function(button) {
    //     button.classList.remove('top-menu--active');
    // });
    // that.querySelector('a').classList.add('top-menu--active');
    load_page(page);
}

function profile_menu_click(that,page){
    
    load_page(page);
}

function load_page(page) {
    
    console.log("main.js > load_page() > "+page);
    window.history.replaceState({}, '', "/"+page);
    hide_all_page();
    show_page(page.replace('dashboard/', ''));


    //tanda menu aktif
    document.querySelectorAll(".side-nav li a").forEach(function(button) {
        button.classList.remove('side-menu--active');
        console.log('main.js > load_page() > '+button.id);
        
    });
    document.getElementById(page.replace('dashboard/', '')+'-side-menu').classList.add('side-menu--active');

    return false;
}

function toggleDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('hidden');
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.relative')) {
            dropdown.classList.add('hidden');
        }
    }, { once: true });
}

function is_role(role){ 
    if (!isCookieSet('user_role')) {
        return false;
    }
    const role_cookie=getCookie('user_role');
    let role_object=JSON.parse(role_cookie);
    if (role_object[role] === true) {
        return true;
    }
    return false;
}

function is_login(){
    if (!isCookieSet('remember_me_token')) {
        return false;
    }
    const token=getCookie('remember_me_token');
    if (token==0 || token==null) {
        return false;
    }else{
        return true;
    }
}

function append_popup(popup_topic){
    let a=popup_data(popup_topic);
    document.getElementById("popup_title").innerHTML=a['title'];
    document.getElementById("popup_body").innerHTML=a['body'];
    document.getElementById("popup_button").innerHTML=a['button'];
}

function append_popup_top(popup_topic){
    let a=popup_data(popup_topic);
    document.getElementById("popup_title_top").innerHTML=a['title'];
    document.getElementById("popup_body_top").innerHTML=a['body'];
    document.getElementById("popup_button_top").innerHTML=a['button'];
}


function show_popup(lokasi=''){
    if (lokasi=='top') {
        document.getElementById("popup_wrapper_top").classList.remove('hide');
    }else{
        document.getElementById("popup_wrapper").classList.remove('hide');
    }
    return false;
}

function close_popup(lokasi=''){
    if (lokasi=='top') {
        document.getElementById("popup_wrapper_top").classList.add('hide');
    }else{
        document.getElementById("popup_wrapper").classList.add('hide');
    }
    return false;
}

function show_menu(){
  var cek=document.getElementById("side-nav").classList.contains('hide');
  if (cek) {
    document.getElementById("side-nav").setAttribute("class"," ")
  }else{
    document.getElementById("side-nav").setAttribute("class","hide")
  }
}

function hide_all_page(){
    let pages=document.getElementsByClassName("page");

    //hide semua page
    for (let i = 0; i < pages.length ; i++) {
        pages[i].classList.add('hide');
    }
    
    let side_menu=document.getElementsByClassName("side-menu"); 
    //hide semua top-menu
    for (let i = 0; i < side_menu.length ; i++) {
        side_menu[i].classList.add('hide');
    }
}
 

function show_page(page_name){
    if (document.getElementById(page_name+'-page')) {
        document.getElementById(page_name+'-page').classList.remove('hide');
    } 
}

function hide_page(page_name){
    if (document.getElementById(page_name)) {
        document.getElementById(page_name).classList.add('hide');
    }
}

function init(){
  affiliate2cookie();
}

function affiliate2cookie(){
  var cek=getCookie('diundang_oleh');
  if(cek=='' || cek=='undefined'){
    const strings = location.search.split('aff=')[1]
    document.cookie = `diundang_oleh=${strings};path=/;`
  }
}

function isCookieSet(name) {
    return document.cookie.split("; ").some((cookie) => cookie.startsWith(name + "="));
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(n) {
    let a = `; ${document.cookie}`.match(`;\\s*${n}=([^;]+)`);
    return a ? decodeURIComponent(a[1]) : '';
}

function tryParseJSONObject (jsonString){
    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }

    console.log('json format invalid');
    return false;
};
 

function number_format(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function get_token(){
    return getCookie('remember_me_token');
}

function scrollTo(selector) {
  const targetDiv = document.querySelector(selector);
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function create_loading(selector,width){
    console.log('main.js > create_loading()');
    let base_url=localStorage.getItem('base_url');
    if (selector instanceof HTMLElement) {
        selector.innerHTML=`<img style='width:${width}px;' src='${base_url}/asset/icon/loading.gif'>`;
        console.log('main.js > create_loading() > element');
    }else if (document.querySelector(selector)) {
        document.querySelector(selector).innerHTML=`<img style='width:${width}px;' src='${base_url}/asset/icon/loading.gif'>`;
    }
}

function remove_loading(selector){
    if (selector instanceof HTMLElement) {
        selector.innerHTML=``;
    }else if (document.querySelector(selector)) {
        document.querySelector(selector).innerHTML=``;
    }
}

function alert2(text){
    append_popup('alert');
    document.getElementById('alert_body').innerText = text;
    show_popup();
}

function tgl_indo(input){
    if (input=='' || input==null) {return;}
    // Buat nama bulan dalam bahasa Indonesia
    const bulanIndonesia = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    
    // Pisahkan tanggal dan waktu
    const [tanggal, waktu] = input.split(" ");
    
    // Pecah tanggal menjadi tahun, bulan, dan hari
    const [tahun, bulan, hari] = tanggal.split("-");
    
    // Ambil jam dan menit dari waktu
    const [jam, menit] = waktu.split(":");
    
    // Format tanggal menjadi "23 Des 2025 12:45"
    return `${parseInt(hari)} ${bulanIndonesia[parseInt(bulan) - 1]} ${tahun} ${jam}:${menit}`;
};

function tgl(tgl){
    const date = new Date(tgl);
    const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    return (formattedDate); 
}
