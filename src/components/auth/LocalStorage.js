 const auth = {

    setUid(uid) {
        sessionStorage.setItem("uid", uid);
      },
      getUid(){
        
         return sessionStorage.getItem("uid");
      },
      setName(name) {
        sessionStorage.setItem("name", name);
      },
      getName() {
        return sessionStorage.getItem("name");
      },
      setToken(token) {
        sessionStorage.setItem("token", token);
      },
      getToken() {
        return sessionStorage.getItem("token");
      },
      deleteAll() {
        sessionStorage.removeItem('uid');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('token');
      },
      setAll( uid, name, token){
        sessionStorage.setItem("uid", uid);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("token", token);
      }

};

export default auth;