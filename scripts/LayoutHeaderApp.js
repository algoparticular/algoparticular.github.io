export default {
    props: {
        hasnav: Boolean,
        language: String
    },
    template: `
        <header class="inApp">
            <nav v-if="hasnav">
                <select class="lang" :value="language" @change="$emit('update:language', $event.target.value)">
                    <option v-for="(locale, i) in $i18n.availableLocales" :key="i" :value="locale">{{ locale.toUpperCase() }}</option>
                </select>
            </nav>

            <div id="logo">
                <slot name="logo"></slot>
            </div>
        </header>
    `
}