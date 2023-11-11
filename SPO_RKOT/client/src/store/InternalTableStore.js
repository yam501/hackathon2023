import { makeAutoObservable } from "mobx"
import InternalTableService from "../service/InternalTableService"

export default class InternalTableStore {
    constructor() {
        this._internalTable = []
        makeAutoObservable(this)
    }

    setExternalTables(internalTable) {
        this.internalTable = internalTable

    }

    async fetchAll() {
        const response = await InternalTableService.fetchAll()
        this.setExternalTables(response.data)
    }

    async getAllByExternalTableId(externalTableId) {
        const response = await InternalTableService.getAllByExternalTableId(externalTableId)
        this.setExternalTables(response.data)
    }

    async create(
        externalTableId, companyName,

        voiceServiceNonAcessibility, voiceServiceCutOffRatio, speechQualityonCallbasis, negativeMOSSamplesRatio,
        undeliveredSMSRatio, averageSMSTime,

        HTTPSessionFailureRatio, HTTPULMeanUserDataRate, HTTPDLMeanUserDataRate, HTTPSessionTime,

        testVoiceConnectionQuantity, POLQA, negativeMOSSamplesCount, SMSQuantity, quantityConnection,
        quantitySessions) {
        await InternalTableService.create(
            externalTableId, companyName,

            voiceServiceNonAcessibility, voiceServiceCutOffRatio, speechQualityonCallbasis, negativeMOSSamplesRatio,
            undeliveredSMSRatio, averageSMSTime,

            HTTPSessionFailureRatio, HTTPULMeanUserDataRate, HTTPDLMeanUserDataRate, HTTPSessionTime,

            testVoiceConnectionQuantity, POLQA, negativeMOSSamplesCount, SMSQuantity, quantityConnection,
            quantitySessions
        )
    }

    get internalTable() {
        return this._internalTable
    }

}