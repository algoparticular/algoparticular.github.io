export default {
    props: {
        language: String
    },
    template: `
        <header class="inApp">
            <div id="logo">
                <slot name="logo"></slot>
            </div>
        </header>
    `
}