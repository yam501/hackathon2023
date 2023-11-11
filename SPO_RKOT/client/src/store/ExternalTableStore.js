import { makeAutoObservable } from "mobx"
import ExternalTableService from "../service/ExternalTableService";

export default class ExternalTableStore {
    constructor() {
        this._externalTable = []
        makeAutoObservable(this)
    }

    setExternalTables(externalTable) {
        this._externalTable = externalTable

    }

    async fetchAll() {
        const response = await ExternalTableService.fetchAll()
        this.setExternalTables(response.data)
    }

    async changeDataById(id, district, place, startDate, endDate) {
        const response = await ExternalTableService.changeDataById(id, district, place, startDate, endDate)
        this.setExternalTables(response.data)
    }

    async create(district, place, startDate, endDate) {
        console.log("Z nen")
        return await ExternalTableService.create(district, place, startDate, endDate)
    }

    get externalTable(){
        return this._externalTable
    }

}