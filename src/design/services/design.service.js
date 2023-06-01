import http from '../../shared/services/http-common.service';
export class DesignService {
    getAll(){
        return http.get('/design');
    }
    getById(id){
        return http.get(`/design/${id}`);
    }

    create(data){
        return http.post(`/design`,data);
    }
    update(id,data){
        return http.put(`/design/${id}`,data);
    }
    delete(id){
        return http.delete(`/design/${id}`);
    }
}