export default {
    props: {
      copyright: Boolean,
      language: String
    },
    template: `
    <footer>        
        <slot></slot>

        <nav>
            <select class="lang" :value="language" @change="$emit('update:language', $event.target.value)">
                <option v-for="(locale, i) in $i18n.availableLocales" :key="i" :value="locale">{{ locale.toUpperCase() }}</option>
            </select>
        </nav>

        <p v-if="copyright" class="copyright">{{ $t("message.copyrightA") }} <a href="https://juanmanuelynz.com" target="_blank">Juan</a><br>{{ $t("message.copyrightB") }} <a href="/community.html">{{ $t("message.copyrightC") }}</a></p>
    </footer>
    `
}