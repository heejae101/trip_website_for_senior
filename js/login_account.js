  // Define an array to store login credentials
  let users = [
    {login_tel:"01015771577", login_pwd:"A1352468"},    // name으로 따온다.
    {login_tel:"01016005222", login_pwd:"2710630bB"}
  ];

  function login() {
    // Get the username and password entered by the user
    let tel = document.getElementById("id_input").value;
    let pwd = document.getElementById("pwd_input").value;

    // Check if the login credentials match any user in the array
    let match=false;
      for (let i = 0; i < users.length; i++) {
        if (tel === users[i].login_tel && pwd === users[i].login_pwd) {
          match = true;
          break;
        }
      }

    // If the login credentials match, redirect to another HTML page
      if (match) {
        window.location.href = "../index.html";
      } else {
        alert("유효하지 않은 계정입니다.\n확인 후, 다시 입력해주세요.");
      }
    }