export default {
    props: {
        language: String
    },
    template: `
        <header>
            <div class="navigation">
                <nav>
                    <slot name="navigation"></slot>
                </nav>
                
                <nav>
                    <select class="lang" :value="language" @change="$emit('update:language', $event.target.value)">
                        <option v-for="(locale, i) in $i18n.availableLocales" :key="i" :value="locale">{{ locale.toUpperCase() }}</option>
                    </select>
                </nav>
            </div>
            
            <div id="logo">
                <slot name="logo"></slot>
            </div>
        </header>
    `
}