<template>
    <div>

        <v-layout row>
            <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
                <h4>{{items.instruction}}</h4>
                <v-layout align-center row wrap class="mt-5 mb-5">
                    <v-flex xs12 md8>
                        <div style="position: relative">
                            <video id="archive0" src="public/fileSize.mov" width="100%"
                                   :controls="played.includes(0)"></video>
                            <v-fab-transition>
                                <v-btn v-show="played.includes(0)" fab dark absolute class="btnPause"
                                       @click.native="clickPause(0)">
                                    <v-icon large>pause</v-icon>
                                </v-btn>
                            </v-fab-transition>
                            <v-fab-transition>
                                <v-btn v-show="!played.includes(0)" fab dark absolute class="btnPlay"
                                       @click.native="clickPlay(0)">
                                    <v-icon large>play_arrow
                                    </v-icon>
                                </v-btn>
                            </v-fab-transition>
                        </div>

                    </v-flex>
                    <v-flex xs12 md4>
                        <v-btn href="public/File.docx"
                               :info="!fileDownloaded"
                               dark
                               class="mb-4"
                               large
                               style="width:100%;"
                               @click.native="fileDownloaded = true;" download>
                            {{items.downloadFile}}
                            <v-icon>file_download</v-icon>
                        </v-btn>
                        <v-text-field type="number"
                                      id="fileSize"
                                      class="textField"
                                      :disabled="victory"
                                      :error="victory==false?fileSize!=answers.fileSize:false"
                                      v-model="fileSize"
                                      :label="items.fileSize"
                        ></v-text-field>
                    </v-flex>
                </v-layout>


                <v-layout align-center row wrap class="mt-5 mb-5">
                    <v-flex xs12 md8>

                        <div style="position: relative">
                            <video id="archive1" src="public/archiveSize.mov" width="100%"
                                   :controls="played.includes(1)"></video>
                            <v-fab-transition>
                                <v-btn v-show="played.includes(1)" fab dark absolute class="btnPause"
                                       @click.native="clickPause(1)">
                                    <v-icon large>pause</v-icon>
                                </v-btn>
                            </v-fab-transition>
                            <v-fab-transition>
                                <v-btn v-show="!played.includes(1)" fab dark absolute class="btnPlay"
                                       @click.native="clickPlay(1)">
                                    <v-icon large>play_arrow
                                    </v-icon>
                                </v-btn>
                            </v-fab-transition>
                        </div>

                    </v-flex>
                    <v-flex xs12 md4>
                        <v-btn href="public/File.rar"
                               :info="!archiveDownloaded"
                               dark
                               class="mb-4"
                               large
                               style="width:100%;"
                               @click.native="archiveDownloaded = true;" download>
                            {{items.downloadArchive}}
                            <v-icon :dark="archiveDownloaded">file_download</v-icon>
                        </v-btn>
                        <v-text-field type="number"
                                      class="textField"
                                      :error="victory==false?archiveSize!=answers.archiveSize:false"
                                      v-model="archiveSize"
                                      :disabled="victory"
                                      :label="items.archiveSize"
                        ></v-text-field>
                    </v-flex>
                </v-layout>


                <v-layout align-center row wrap class="mt-5 mb-5">
                    <v-flex xs12 md8>
                        <div style="position: relative">
                            <video id="archive2" src="public/archive.mp4" width="100%"
                                   :controls="played.includes(2)"></video>
                            <v-fab-transition>
                                <v-btn v-show="played.includes(2)" fab dark absolute class="btnPause"
                                       @click.native="clickPause(2)">
                                    <v-icon large>pause</v-icon>
                                </v-btn>
                            </v-fab-transition>
                            <v-fab-transition>
                                <v-btn v-show="!played.includes(2)" fab dark absolute class="btnPlay"
                                       @click.native="clickPlay(2)">
                                    <v-icon large>play_arrow
                                    </v-icon>
                                </v-btn>
                            </v-fab-transition>
                        </div>
                    </v-flex>
                    <v-flex xs12 md4>
                        <v-text-field
                                v-model="coefficient"
                                :disabled="victory"
                                class="textField"
                                :error="victory==false?coefficient!=answers.coefficient:false"
                                :label="items.coefficient"
                                type="number"
                        ></v-text-field>
                        <v-slide-x-transition mode="out-in">
                            <v-btn large primary style="width:100%;" :disabled="!(fileSize && archiveSize)"
                                   v-if="!victory"
                                   @click.native="check()">
                                {{$lang.string.check}}
                            </v-btn>
                            <v-btn large style="width:100%;" success v-else-if="victory" @click.native="finish()">
                                {{$lang.string.finalize}}
                            </v-btn>
                        </v-slide-x-transition>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>


        <v-layout v-if="items.remember" column class="grey lighten-3">
            <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
                <h4 class="mt-4 mb-4">{{$lang.string.remember}}</h4>

                <div v-for="(item,index) in items.remember" class="mt-4 mb-4">
                    <div class="headline rememberList" v-html="item.text">
                    </div>
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
                input01: null,
                coefficient: null,
                fileSize: null,
                archiveSize: null,
                fileDownloaded: false,
                archiveDownloaded: false,
                victory: null,
                attempts: 0,
                answers: {
                    fileSize: 13998,
                    archiveSize: 11469,
                    coefficient: 81
                },
                played: [],
//                rules: {
//                    validate: (value) => {
//                        if (this.victory == false) return 'Не правильно';
//                        return true;
//                    }
//                    required: (value) => !!value || 'необходимо заполнить',
//                    isNumber: (value) => {
//                        if (!value) return true;
////                        const pattern = /[0-9]/
////                        return pattern.test(value) || 'Ответ должен содержать только цифры.'
//                    }
//                }
            }
        },

        beforeDestroy() {
            this.played.splice(0, this.played.length);
            this.victory = null;
        },
        methods: {
            clickPlay(index) {
                this.played.forEach((item) => {
                    document.querySelector('#archive' + item).pause();
                });
                this.played.splice(0, this.played.length);
                document.querySelector('#archive' + index).play();
                this.played.push(index);
            },
            clickPause(index) {
                this.played.splice(this.played.indexOf(index), 1);
                document.querySelector('#archive' + index).pause();
            },
            finish() {
                this.$router.push({
                    name: 'res',
                    params: {result: (100 - this.attempts * 5), resId: this.$route.params.gameId}
                });
            },
            check() {
                let {fileSize, archiveSize, coefficient} = this.answers;
                console.log('fileSize: ', fileSize);
                console.log('archiveSize: ', archiveSize);
                console.log('coefficient: ', coefficient);
                if (this.fileSize == fileSize && this.archiveSize == archiveSize && this.coefficient == coefficient) {
//                    CORRECT
                    this.victory = true;
                } else {
                    this.victory = false;
                    this.attempts++;
                }
                this.$parent.$emit('game', this.victory);
            }
        }
    }
</script>

<style lang="stylus">
    .textField label, .textField input
        margin: 0 20px;
        font-size: 1.5em;

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
</style>