export default {
    props: {
      hascopyright: Boolean,
      hasnav: Boolean,
      language: String
    },
    template: `
    <footer class="inApp">        
        <slot></slot>

        <nav v-if="hasnav">
            <select class="lang" :value="language" @change="$emit('update:language', $event.target.value)">
                <option v-for="(locale, i) in $i18n.availableLocales" :key="i" :value="locale">{{ locale.toUpperCase() }}</option>
            </select>
        </nav>

        <p v-if="hascopyright" class="copyright">{{ $t("message.copyrightApp") }} <a href="https://algoparticular.com" target="_blank">Algo Particular</a></p>
    </footer>
    `
}