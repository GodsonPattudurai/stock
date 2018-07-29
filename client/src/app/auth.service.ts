export class AuthService {
  
  loggedIn = false;
  
  isAuthenticated(){
      if(localStorage.getItem("isLogin") == '1'){
      let diffInMs: number = Date.parse(new Date().toString()) - Date.parse(localStorage.getItem("loginTime")); 
      let diffInHours: number = diffInMs / 1000 / 60 / 60;
        if(diffInHours > 1){
            this.logout();
        }else{
            this.loggedIn = true;    
        }
    }
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn)
      },800);
    });
    return promise;
  }
  
  login(){
    localStorage.setItem("isLogin", '1');
    localStorage.setItem("loginTime", new Date().toString());
    this.loggedIn = true;
  }
  
  logout(){
    localStorage.removeItem("isLogin");
    localStorage.removeItem("loginTime");
    this.loggedIn = false;
  }
}