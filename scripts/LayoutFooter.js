export default {
    props: {
      copyright: Boolean,
    },
    template: `
    <footer>        
        <slot></slot>
        <p v-if="copyright" class="copyright">{{ $t("message.copyrightA") }} <a href="https://juanmanuelynz.com" target="_blank">Juan</a><br>{{ $t("message.copyrightB") }} <a href="/community.html">{{ $t("message.copyrightC") }}</a></p>
    </footer>
    `
}
  
  