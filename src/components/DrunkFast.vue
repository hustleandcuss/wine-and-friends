<template>
    <div>
        <button @click="send">Get drunk fast!</button>
        <h5>{{ message }}</h5>

    </div>
</template>

<script>
    import api from "../api.js";

    export default {
        name: 'DrunkFast',
        data: function () {
            return {
                error: "",
                message: "",
            };
        },
        methods: {
            send() {
                navigator.geolocation.getCurrentPosition(pos => {
                    const params = {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                        time: Date.now()
                    }
                    let component = this;
                    api
                        .getDrunkFast(params)
                        .then(response => {
                            component.message = response.message;
                        })
                        .catch(error => {
                            component.error = error.messages;
                        });
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    a {
        color: #42b983;
    }
</style>
