export class AuthService {
  
  loggedIn = false;
  
  isAuthenticated(){
    if(localStorage.getItem("isLogin") == '1'){
      this.loggedIn = true;
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
    this.loggedIn = true;
  }
  
  logout(){
    localStorage.removeItem("isLogin");
   this.loggedIn = false;
  }
}