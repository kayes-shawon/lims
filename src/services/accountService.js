import api from '@/services/api'

export default {
    fetchAccounts(){
        return api.get(`accounts/`)
            .then(response => response.data)
    },
}
