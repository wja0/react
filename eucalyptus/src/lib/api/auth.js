import axios from 'axios';

// export const checkEmailExists = (email) => axios.get('/api/auth/exists/email/' + email);
export const checkIDExists = ({id}) => axios.post("http://218.151.66.186:8080/spring/isunique" , {ID : id});

export const localRegister = ({name, id, password}) => axios.post("http://218.151.66.186:8080/spring/register", { Name : name, ID : id,Pwd : password });
export const localLogin = ({id, password}) => axios.post("http://218.151.66.186:8080/spring/login", { ID: id, Pwd :password });

export const checkStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');