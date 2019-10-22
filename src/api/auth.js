import axios from 'axios';
export function login(email, password) {
    return axios.post('/auth/login', {email, password})
        .then(res => {
            console.log(res.data);
            const token = res.data.token;
            localStorage.setItem('jwt_token', token);
            axios.defaults.headers.common['Authorization']
                = `Bearer ${localStorage.jwt_token}`;
            return token;
        });
}

export function logout(){
    localStorage.removeItem('jwt_token');
}

export function isLogin() {
    let token = localStorage.jwt_token;
    if(token){
        axios.defaults.headers.common['Authorization']
                = `Bearer ${localStorage.jwt_token}`;
    }
    return !!token;
}