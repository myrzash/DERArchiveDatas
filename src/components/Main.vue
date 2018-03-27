<template>
    <div>
        <v-layout row class="white pt-3 pb-3">
            <v-flex lg3 hidden-md-and-down>
                <div id="folder1" style="min-height:800px"></div>
            </v-flex>
            <v-flex xs12 lg8>
                <v-card flat>
                    <transition name="fade">
                        <div v-show="show" class="text-xs-right pa-3"
                             style="display:flex; flex-direction: row; justify-content: flex-end; align-items: center;">
                            <img src="public/images/heroHead.png" alt="">
                            <div class="pl-4">
                                <h3 class="bolder">{{$lang.string.subject}}</h3>
                                <h3 class="bolder blue--text">{{$lang.value.grade}}</h3>
                            </div>
                        </div>
                    </transition>
                    <transition name="fade">
                        <div v-show="show">
                            <h1 class="ma-5 bolder" style="max-width:800px">{{$lang.value.title}}</h1>
                            <h2 class="ma-5">{{$lang.value.typeder}}</h2>
                        </div>
                    </transition>
                    <transition name="fadeUp">
                        <v-layout v-show="show" row wrap class="ma-5" text-xs-right>
                            <img height="100%" src="public/images/author.png" alt=""/>
                            <v-flex xs12 md8 class="ma-0 pa-0">
                                <v-card height="100%" flat class="blue white--text pa-4 text-xs-right">
                                    <p class="title">&#8220;{{$lang.value.prologue.phrase}}&#8221;</p>
                                    <em class="subheading">&mdash; {{$lang.value.prologue.author}}</em>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </transition>
                    <!--</v-slide-y-reverse-transition>-->
                </v-card>
            </v-flex>
            <v-flex lg5 hidden-md-and-down>
                <div id="folder2"></div>
            </v-flex>
        </v-layout>

        <v-layout class="grey lighten-3 pl-5" row wrap>
            <v-flex xs12 md12 lg10 offset-lg2 xl8 offset-xl2>
                <h2 class="ma-5">{{$lang.string.sections}}</h2>
            </v-flex>
            <v-flex xs12 md12 lg10 offset-lg1 xl8 offset-xl2>
                <Sections class="mb-5"></Sections>
            </v-flex>

        </v-layout>
    </div>
</template>

<script>
    import Sections from './Sections.vue'

    export default {
        data() {
            return {
                show: false,
            }
        },
        created() {
            setTimeout(() => {
                this.show = true;
            }, 0);
        },
        components: {
            Sections
        },
    }
</script>
<style>
    .main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
    }

</style>