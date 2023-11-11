import { $host } from "../http";

const ExternalTableService = {
    async create(district, place, startDate, endDate) {
        return new Promise((resolve) => resolve($host.post('api/externalTable/create', { district, place, startDate, endDate })))
    },

    async fetchAll() {
        return new Promise((resolve) => resolve($host.post('api/externalTable/getAll')))
    },

    async delete(id) {
        return new Promise((resolve) => resolve($host.post('api/externalTable/delete', {id})))
    },

    async changeDataById(id, district, place, startDate, endDate) {
        return new Promise((resolve) => resolve($host.put('api/externalTable/changeDataById', {id, district, place, startDate, endDate})))
    }
}

export default ExternalTableService;