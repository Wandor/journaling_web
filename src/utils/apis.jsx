import { api } from "./configs";

const url = (window.location.host.indexOf("localhost") !== -1)  ? api.UAT_API_URL: api.API_URL;

const apis = {
    login: `${url}/auth/login`,
    register: `${url}/configuration/countries`,
    createJournal: `${url}/configuration/country/taxes`,
    updateJournal: `${url}/configuration/country/levies`,
    deleteJournal: `${url}/configuration/policy-status`,
    viewJournals: `${url}/configuration/approval-status`,
    viewJournal: `${url}/configuration/payment-types`,

    storeName: {
        REQ_Countries: "REQ_Countries",
        REQ_Counties: "REQ_Counties",
        REQ_Organizations: 'REQ_Organizations',
        REQ_Genders: 'REQ_Genders',
        REQ_Languages: 'REQ_Languages',
        REQ_Subcounties: 'REQ_Subcounties',
        REQ_Wards: 'REQ_Wards'
    },

}

export default apis;