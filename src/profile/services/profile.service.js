import http from '../../shared/services/http-common.service';
export class ProfileService {
    getAll(){
        return http.get('/profile');
    }
    getById(id){
        return http.get(`/profile/${id}`);
    }
    getByEmail(email) {
        return http.get(`/profile`, { params: { email } });
    }
    getByPassword(password){
        return http.get(`/profile`, { params: { password } });
    }
    create(data){
        return http.post(`/profile`,data);
    }
    update(id,data){
        return http.put(`/profile/${id}`,data);
    }
    delete(id){
        return http.delete(`/profile/${id}`);
    }

}