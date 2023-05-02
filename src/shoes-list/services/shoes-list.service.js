import http from '../../shared/services/http-common.service';
export class ShoesListService{
    getAll(){
        return http.get('/shoes');
    }
    getById(id){
        return http.get(`/shoes/${id}`);
    }

    create(data){
        return http.post(`/shoes`,data);
    }
    update(id,data){
        return http.put(`/shoes/${id}`,data);
    }
    delete(id){
        return http.delete(`/shoes/${id}`);
    }
}