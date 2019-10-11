<template>
    <div class="account">
        <p>This is an account list</p>
        <div class="list-table">
            <div class="acnt" v-for="(acnt, index) in accounts" :key="index">
                <p class="msg-index">[{{index}}]</p>
                <p class="msg-subject" v-html="acnt.name"></p>
                <p class="msg-body" v-html="acnt.bank"></p>
                <p class="msg-body" v-html="acnt.branch"></p>
                <p class="msg-body" v-html="acnt.url"></p>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Accounts",
        data() {
            return {
                name: "",
                bank: "",
                branch: "",
                url: ""
            }
        },
        computed: mapState({
            accounts: state => state.accounts.accounts

        }),
        created() {
            this.$store.dispatch('accounts/getAccounts')
        }
    }
</script>

<style scoped>

</style>
