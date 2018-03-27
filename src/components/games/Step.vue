<template>
    <div>
        <v-layout column>
            <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
                <v-stepper v-model="position" vertical class="elevation-0">
                    <template v-if="items" v-for="(item,index) in items.steps">
                        <v-stepper-step :step="index+1" v-bind:complete="position > index"
                                        @click.native="position = index + 1">
                            <!--{{item.title}}-->
                        </v-stepper-step>
                        <v-stepper-content :step="index+1">

                            <v-layout row wrap>
                                <v-flex md4 xs12 class="grey pa-0">
                                    <img v-if="item.image" :src="item.image" width="100%" alt=""/>
                                    <video class="mvideo" v-if="item.video" :src="item.video" width="100%"
                                           frameborder="0"
                                           controls></video>
                                </v-flex>
                                <v-flex md8 xs12 class="grey lighten-3 pa-4">
                                    <h3 class="bolder mb-5" v-if="item.title">{{item.title}}</h3>
                                    <h5 class="mb-5" v-if="item.text" v-html="item.text"></h5>
                                    <h5 class="mb-5"><a class="primary--text" v-if="item.href" :href="item.href.link"
                                                        :download="item.href.download?item.href.download:false">{{item.href.title}}
                                    </a></h5>
                                </v-flex>
                            </v-layout>

                            <v-btn style="width:100%;" v-if="index<items.steps.length-1" large primary dark
                                   @click.native="position++">
                                {{$lang.string.next}}
                                <v-icon class="ml-1">navigate_next</v-icon>
                            </v-btn>

                        </v-stepper-content>
                    </template>
                </v-stepper>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        props: ['items'],
        data() {
            return {
                position: 1,
            }
        },
        watch: {
            position(val) {
            }
        },
        methods: {
            finish() {
                this.$router.push({name: 'res', params: {result: 100, resId: this.$route.params.gameId}});
            }
        }
    }
</script>