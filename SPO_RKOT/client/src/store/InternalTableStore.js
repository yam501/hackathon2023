import { makeAutoObservable } from "mobx"
import InternalTableService from "../service/InternalTableService"

export default class InternalTableStore {
    constructor() {
        this._internallTable = []
        makeAutoObservable(this)
    }

    setExternalTables(internallTable) {
        this.internallTable = internallTable

    }

    async fetchAll() {
        const response = await InternalTableService.fetchAll()
        this.setExternalTables(response)
    }

    async getAllByExternalTableId(externalTableId) {
        const response = await InternalTableService.getAllByExternalTableId(externalTableId)
        this.setExternalTables(response)
    }

    async create(
        externalTableId, companyName,

        voiceServiceNonAcessibility, voiceServiceCutOffRatio, speechQualityonCallbasis, negativeMOSSamplesRatio,
        undeliveredSMSRatio, averageSMSTime,

        HTTPSessionFailureRatio, HTTPULMeanUserDataRate, HTTPDLMeanUserDataRate, HTTPSessionTime,

        testVoiceConnectionQuantity, POLQA, negativeMOSSamplesCount, SMSQuantity, quantityConnection,
        quantitySessions
        ) {
        await InternalTableService.create(
            externalTableId, companyName,

            voiceServiceNonAcessibility, voiceServiceCutOffRatio, speechQualityonCallbasis, negativeMOSSamplesRatio,
            undeliveredSMSRatio, averageSMSTime,

            HTTPSessionFailureRatio, HTTPULMeanUserDataRate, HTTPDLMeanUserDataRate, HTTPSessionTime,

            testVoiceConnectionQuantity, POLQA, negativeMOSSamplesCount, SMSQuantity, quantityConnection,
            quantitySessions)
    }

}