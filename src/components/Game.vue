<template>
    <div>
        <v-layout row class="white">
            <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
                <h3 class="mt-5">{{part.title}}</h3>
            </v-flex>
        </v-layout>

        <component class="white" :is="part.interactive.name" :items="part.interactive.items"></component>
        <router-view></router-view>

        <v-layout v-if="nextPart" class="black pa-5" text-xs-right row wrap>
            <v-flex xs3 md2 offset-md1 lg2 offset-lg2 xl1 offset-xl3
                    class="partimage"
                    :style="{background:'url('+`public/images/${nextPart.image}`+')'}">
                <!--<img height="120" width="160" :src="`public/images/${nextPart.image}`" alt=""/>-->
            </v-flex>
            <v-flex xs12 md8 lg6 xl4 class="blue">
                <v-card flat class="transparent">
                    <p class="headline white--text pa-2 mt-2 mr-5 ml-5"> {{nextPart.title}}</p>
                    <v-spacer></v-spacer>
                    <v-btn flat class="white--text" @click.native="$router.push(nextPart.route)">
                        {{$lang.string.nextSection}}
                    </v-btn>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import Lecture from './games/Lect.vue'
    import Step from './games/Step.vue'
    import Sort from './games/Sortable.vue'
    import Test from './games/Test.vue'
    import InputText from './games/Input.vue'

    export default {
        data() {
            return {}
        },
        created() {
            let soundCorrect = new Audio();
            soundCorrect.src = 'public/sound/correct1.mp3';
            let soundWrong = new Audio();
            soundWrong.src = 'public/sound/error1.mp3';

            this.$on('game', (isCorrect) => {
                if (!this.$store.state.soundEffects) return;

                console.log('isCorrect: ', isCorrect);
                if (isCorrect) {
                    soundCorrect.play();
                } else {
                    soundWrong.play();
                }

            });
        },
        components: {
            Lecture, Sort, Test, InputText, Step
        },
        methods: {
            shuffle: function (a) {
                var j, x, i;
                for (i = a.length; i; i--) {
                    j = Math.floor(Math.random() * i);
                    x = a[i - 1];
                    a[i - 1] = a[j];
                    a[j] = x;
                }
                return a;
            },
        },
        computed: {
            part() {
                return this.$lang.value.parts[this.$route.params.gameId];
            },
            nextPart() {
                let nextGameId = +this.$route.params.gameId + 1;
                let end = nextGameId < this.$lang.value.parts.length;
                if (!end) return null;
                return {
                    title: this.$lang.value.parts[nextGameId].info,
                    image: this.$lang.value.parts[nextGameId].image,
                    route: {
                        name: 'game',
                        params: {gameId: nextGameId}
                    }
                };
            }
        },
    }
</script>

<style lang="stylus">
    .mflex
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

    .partimage
        background-repeat: no-repeat !important;
        background-position center top;
        background-size: cover !important;
        min-height: 150px;
</style>