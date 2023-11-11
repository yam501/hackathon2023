import { $host } from "../http";

const ExternalTableService = {
    async create(district, place, period) {
        return new Promise((resolve) => resolve($host.post('api/externalTable/create', { district, place, period })))
    },

    async fetchAll() {
        return new Promise((resolve) => resolve($host.post('api/externalTable/getAll')))
    },

    async delete(id) {
        return new Promise((resolve) => resolve($host.post('api/externalTable/delete', {id})))
    }

}

export default ExternalTableService;