import { $host } from "../http";


const InternalTableService = {
    async create(
        externalTableId, companyName,

        voiceServiceNonAcessibility, voiceServiceCutOffRatio, speechQualityonCallbasis, negativeMOSSamplesRatio,
        undeliveredSMSRatio, averageSMSTime,

        HTTPSessionFailureRatio, HTTPULMeanUserDataRate, HTTPDLMeanUserDataRate, HTTPSessionTime,

        testVoiceConnectionQuantity, POLQA, negativeMOSSamplesCount, SMSQuantity, quantityConnection,
        quantitySessions) {
        return new Promise((resolve) => resolve($host.post('api/internalTable/create', {
            externalTableId, companyName,

            voiceServiceNonAcessibility, voiceServiceCutOffRatio, speechQualityonCallbasis, negativeMOSSamplesRatio,
            undeliveredSMSRatio, averageSMSTime,

            HTTPSessionFailureRatio, HTTPULMeanUserDataRate, HTTPDLMeanUserDataRate, HTTPSessionTime,

            testVoiceConnectionQuantity, POLQA, negativeMOSSamplesCount, SMSQuantity, quantityConnection,
            quantitySessions
        })))
    },

    async fetchAll() {
        return new Promise((resolve) => resolve($host.post('api/internalTable/getAll')))
    },

    async getAllByExternalTableId(externalTableId) {
        return new Promise((resolve) => resolve($host.post('api/internalTable/getAllByExternalTableId', { externalTableId })))
    },

    async changeDataById(id,
        companyName,

        voiceServiceNonAcessibility, voiceServiceCutOffRatio, speechQualityonCallbasis, negativeMOSSamplesRatio,
        undeliveredSMSRatio, averageSMSTime,

        HTTPSessionFailureRatio, HTTPULMeanUserDataRate, HTTPDLMeanUserDataRate, HTTPSessionTime,

        testVoiceConnectionQuantity, POLQA, negativeMOSSamplesCount, SMSQuantity, quantityConnection,
        quantitySessions) {
        return new Promise((resolve) => resolve($host.post('api/internalTable/changeDataById', {
            id,
            companyName,

            voiceServiceNonAcessibility, voiceServiceCutOffRatio, speechQualityonCallbasis, negativeMOSSamplesRatio,
            undeliveredSMSRatio, averageSMSTime,

            HTTPSessionFailureRatio, HTTPULMeanUserDataRate, HTTPDLMeanUserDataRate, HTTPSessionTime,

            testVoiceConnectionQuantity, POLQA, negativeMOSSamplesCount, SMSQuantity, quantityConnection,
            quantitySessions
        })))
    },

    async delete(id) {
        return new Promise((resolve) => resolve($host.post('api/internalTable/delete', { id })))
    }

}

export default InternalTableService;