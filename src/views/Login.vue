<template>
    <v-container
            fluid
            fill-height
    >
        <v-layout
                align-center
                justify-center
        >
            <v-flex
                    xs12
                    sm8
                    md4
            >
                <v-card class="elevation-12">
                    <v-toolbar flat >
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-text-field
                                label="ID"
                                v-model="loginForm.loginId"
                        ></v-text-field>
                        <v-text-field
                                label="Password"
                                v-model="loginForm.password"
                                type="password"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="submit">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            loginForm : {
                loginId : '',
                password : ''
            },
        }
    },
    mounted() {
        console.log('this.$api: ',  this.$api)
    },
    methods: {
        async submit() {

            try {
                const formData = new FormData();
                formData.append('loginId', this.loginForm.loginId);
                formData.append('password', this.loginForm.password);

                const res = await this.$api.login(formData);
                console.log('로그인 성공', res);
                this.$router.push('/');

            } catch(err) {
                console.error('로그인 실패', err);

            }

            // this.$api.login(formData).then(response => {
            //     console.log('로그인 성공',response);
            //     if(response.status === 200) {
            //         this.$router.push('/');
            //     }
            // })
            //     .catch(({response}) => {
            //         console.log('로그인 실패',response);
            //         // this.$router.push('/');
            //     });
        },

    }
}
</script>
