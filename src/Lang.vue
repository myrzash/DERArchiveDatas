<template>
    <router-view></router-view>
</template>

<script>
    export default {
        watch: {
            '$route.params.lang'(lang) {
                this.$lang.setLang(lang);
                document.title = this.$lang.value.title;
                this.$parent.$data.parts = this.$lang.value.parts;
            }
        },
        created() {
//            let langs = ['kz', 'en', 'ru'];
//            if (langs.includes(this.$route.params.lang)) this.$router.push('/kz/error');
            this.$lang.setLang(this.$route.params.lang);
            document.title = this.$lang.value.title;
            this.$parent.$data.parts = this.$lang.value.parts;
        }
    }
</script>