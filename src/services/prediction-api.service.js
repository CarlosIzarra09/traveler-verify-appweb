import http from './http.common';

class PredictionApiService {
    getRvalue(data) {
        return http.post(`/prediction?uuid=
        ${data.uuid}&edad=${data.age}&resultado=${data.result}&ubigeo=${data.ubigeo}
        &destino=${data.destiny}`,);
    }
}

export default new PredictionApiService();