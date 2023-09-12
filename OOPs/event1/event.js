class user {
   
    constructor(name, userName, password) {
        this.name = name;
        this.userName = userName;
        this.password = password;

    }

    login(userName, password) {
        if (userName === this.userName && password === this.password) {
            console.log('login successfully');
        } else {
            console.log('Authentication Failed!!');
        }

    }
   

};
const nehal = new user('Nehal Mahida', 'nehal_mahida', 'password:)');
const js = new UserActivation('javascript', 'js', 'python:)');


nehal.login('nehal_mahida', 'paassword:)');//loggin successfully
js.login('js', 'python:)');//login successfully

console.log(nehal.name);//Nehal Mahida
console.log(nehal.password);//Undefined
//console.log(nehal.#password); //syntax error

nehal.login('nehal_mahida', 'password:)');//Authentication failed !!
nehal.login('nehal_mahida', 'new_password:)');//login successfully