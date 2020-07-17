function clickQuen(){
    $('#quen').click(function (e) { 
        $("#modalLoginForm").modal('hide');
        e.preventDefault()
        $("#form1").submit(function (e) {  
            e.preventDefault()
            
            let newPass=$("#defaultForm-email1").val();
            let rPass = $("#defaultForm-pass1").val();
            localStorage.setItem('rPass', rPass);
            let mk1 = localStorage.getItem('rPass');
           
            if(!newPass){
                setTimeout(function(){
                    $("#small-pass").text("Bắt buộc nhập");
                }, 500);
            }else if(newPass !="admin" || newPass!=mk1){
                setTimeout(function(){
                    $("#small-pass").text("Password không đúng");
                }, 500);
            }
            if(!rPass){
                errorPass2 ="Bắt buộc nhập";
                setTimeout(function(){
                    $('#small-pass1').text(errorPass2);
                }, 500); 
            }
            if((newPass =="admin" || newPass==mk1) && newPass && rPass){
                $("#modalLoginForm1").modal('hide');
                $("#modalLoginForm").modal({keyboard:false});
                $("#connect").text("Bạn đã đổi mật khẩu thành công!");
                $("#small-pass").text(null);
                $('#small-pass1').text(null);
                $("#small1").text(null);
                $('#small').text(null);
                $('#defaultForm-email').val(null);
                $('#defaultForm-pass').val(null);
                $("#form").submit(function (e) { 
                    e.preventDefault();
                    let username=$("#defaultForm-email").val();
                    let password = $("#defaultForm-pass").val();
                    let errorName="";
                    let errorPass="";
                    if(!username){
                        errorName+="Vui long nhap username";
                    }else if(username !="admin"){
                        errorName+="Sai username";
                    }
            
                    setTimeout(function(){
                        $("#small").text(errorName);
                    }, 500);
                    
                
                    if(!password){
                        errorPass+="Vui long nhap pass";
                    }else if(password !="admin" || password != mk1){
                        errorPass+="Sai mat khau";
                    }
                    setTimeout(function(){
                        $('#small1').text(errorPass);
                    }, 500);
                    
                
                    if(username && username=='admin' && password && (password==mk1 || password=="admin")){
                        $('body').load('index.html', function() {
                            $("#modalLoginForm").modal('hide');
                            $('#login').text('Đăng nhập thành công');
                        });
                    }
                });
            }
        });
    });
}
clickQuen();


function clickLogin(){
    $("#login").click(function (e) { 
        e.preventDefault();
        $("#small-pass").text(null);
        $('#small-pass1').text(null);
        $("#small1").text(null);
        $('#small').text(null);
        $('#defaultForm-email').val(null);
        $('#defaultForm-pass').val(null);
        $("#connect").text("");
        let mk=localStorage.getItem('rPass');
        $("#form").submit(function (e) { 
            e.preventDefault();
            let username=$("#defaultForm-email").val();
            let password = $("#defaultForm-pass").val();
            let errorName="";
            let errorPass="";
            if(!username){
                errorName+="Vui long nhap username";
            }else if(username !="admin"){
                errorName+="Sai username";
            }
    
            setTimeout(function(){
                $("#small").text(errorName);
            }, 500);
            
        
            if(!password){
                errorPass+="Vui long nhap pass";
            }else if(password !="admin" || password != mk){
                errorPass+="Sai mat khau";
            }
            setTimeout(function(){
                $('#small1').text(errorPass);
            }, 500);
            
        
            if(username && username=='admin' && password && (password==mk || password=="admin")){
                $('body').load('index.html', function() {
                    $("#modalLoginForm").modal('hide');
                    $('#login').text('Đăng nhập thành công');
                });
            }
        });
    });
}
clickLogin();
   
