<template>
    <v-layout wrap>
        <div v-for="(part,id) in $lang.value.parts">
            <v-slide-x-transition>
                <maincard class="ma-2" :part="part" :id="id"></maincard>
            </v-slide-x-transition>
        </div>
    </v-layout>
</template>

<script>
    import maincard from './model/CardMain.vue'

    export default {
        components: {
            maincard
        },
    }
</script>
