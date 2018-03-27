<template>
    <div>
        <v-layout v-if="items.images" column class="white" text-xs-center>
            <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
                <v-card flat v-for="(item,index) in items.images" class="mt-4 mb-4">
                    <h4>{{item.title}}</h4>
                    <v-layout align-center row wrap>
                        <v-flex style="min-height:300px;" md4 xs12>
                            <!--<div v-if="item.src" class="image"-->
                            <!--:style="{'background-image': `url(../../../${item.src} )`}"></div>-->
                            <img v-if="item.src" :src="item.src" :height="(item.heightImage)?item.heightImage:'100%'"
                                 alt=""/>
                        </v-flex>
                        <v-flex md8 xs12>
                            <h5 class="pa-2 ml-4 text-xs-justify" v-text="item.text"></h5>
                        </v-flex>
                    </v-layout>
                    <v-divider class="mt-4" v-if="index!=items.images.length-1"></v-divider>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout v-if="items.videos" column class="white">
            <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
                <v-card flat v-for="(item,index) in items.videos" class="mt-4 mb-4">
                    <h4>{{item.title}}</h4>

                    <h5 v-if="item.header" class="pa-4 bolder" v-html="item.header"></h5>
                    <div class="text-xs-center" v-if="item.src">
                        <v-progress-circular v-if="!loaded.includes(index)" indeterminate v-bind:size="50"
                                             class="primary--text"></v-progress-circular>
                        <div class="container-video" v-show="loaded.includes(index)">
                            <video
                                    :src="item.src" width="100%"
                                    frameborder="0"
                                    :id="'vid'+index"
                                    :muted="videoLoadEnd(index)"
                                    :controls="played.includes(index)"
                            >
                            </video>

                            <v-fab-transition>
                                <v-btn v-show="played.includes(index)" fab dark absolute class="btnPause"
                                       @click.native="clickPause(index)">
                                    <v-icon large>pause</v-icon>
                                </v-btn>
                            </v-fab-transition>
                            <v-fab-transition>
                                <v-btn v-show="!played.includes(index)" fab dark absolute class="btnPlay"
                                       @click.native="clickPlay(index)">
                                    <v-icon large>play_arrow
                                    </v-icon>
                                </v-btn>
                            </v-fab-transition>
                        </div>

                    </div>

                    <!--<v-layout row align-center wrap>-->
                    <!--<v-flex xs12 md1 text-xs-right>-->
                    <!--<v-btn large fab primary dark>-->
                    <!--<v-icon>hearing-->
                    <!--</v-icon>-->
                    <!--</v-btn>-->
                    <!--</v-flex>-->
                    <!--<v-flex xs12 md11>-->
                    <!--<h5 class="pa-4" v-html="item.text"></h5>-->
                    <!--</v-flex>-->
                    <!--</v-layout>-->

                    <h5 class="pa-4" v-html="item.text"></h5>

                    <v-divider class="mt-4" v-if="index!=items.videos.length-1"></v-divider>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout v-if="items.remember" column class="grey lighten-3">
            <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
                <h4 class="mt-4 mb-4">{{$lang.string.remember}}</h4>

                <div v-for="(item,index) in items.remember" class="mt-4 mb-4">
                    <p class="headline rememberList" v-html="item.text"></p>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

    export default {
        props: ['items'],
        data() {
            return {
                offsetTop: 0,
                positions: [],
                played: [],
                loaded: [],
            }
        },
        methods: {
            videoLoadEnd(item) {
                if (this.loaded.includes(item)) return;
                this.loaded.push(item);
                console.log('videoLoadEnd: ', item);
            },
            clickPlay(index) {
                this.played.forEach((item) => {
                    document.querySelector('#vid' + item).pause();
                });
                this.played.splice(0, this.played.length);
                document.querySelector('#vid' + index).play();
                this.played.push(index);
            },
            clickPause(index) {
                this.played.splice(this.played.indexOf(index), 1);
                document.querySelector('#vid' + index).pause();
            }
        },
        created() {
            this.loaded = [];
            this.positions = [];
            this.played = [];
        },
        beforeDestroy() {
            this.played.splice(0, this.played.length);

        }
//        mounted() {
//            let videos = document.getElementsByClassName('container-video');
//            for (let video of videos) {
//                this.positions.push(this.position(video)[1]);
//            }
//            console.log(this.positions);
//            window.addEventListener('scroll', this.onScroll, true);
//        },
//        beforeDestroy() {
//            window.removeEventListener('scroll', this.onScroll, true);
//        },
//        methods: {
//            onScroll(e) {
//                this.offsetTop = window.pageYOffset || document.documentElement.scrollTop + 100;
//                let top = this.offsetTop - 20;
//                let bottom = this.offsetTop + 20;
//
//                let underScroll = this.positions.filter((item) => {
//                    if (item > top && item < bottom)
//                        return item;
//                });
//                if (underScroll.length > 0) {
//                    console.log("find underScroll: ", underScroll);
//                }
//            },
//            position(elem) {
//                var left = 0,
//                    top = 0;
//
//                do {
//                    left += elem.offsetLeft - elem.scrollLeft;
//                    top += elem.offsetTop - elem.scrollTop;
//                } while (elem = elem.offsetParent);
//
//                return [left, top];
//            }
//        }
    }
</script>

<style lang="stylus">

    .rememberList ul li
        margin: 16px;
        padding: 16px;
        list-style: none;
        background: #2196f3;
        font-weight bolder;
        color: white;
        cursor: pointer;

    .container-video
        position: relative;

    .container-video img
        position absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: no-repeat center cover !important;

    .btnPlay
        left: 50%;
        top: 50%;
        margin-left: -28px;
        margin-top: -28px;

    .btnPause
        left: 50%;
        top: 50%;
        margin-left: -28px;
        margin-top: -28px;
        opacity: 0;

    .btnPause:hover
        opacity: 1;

    /*
       .image
           position: absolute;
           background-position: center !important;
           background-size: cover !important;
           background-repeat: no-repeat;
           width: 100%;
           height: 100%;
           left: 0;
           top: 0;
    */

</style>
