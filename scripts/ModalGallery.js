export default {
    props: {
      show: Boolean,
      content: Object
    },
    template: `
    <transition name="modal">
        <div id="gallery-modal" class="modal" v-if="show" v-on:click="$emit('close')">
            <div class="modal-content">
                <img v-bind:src="content.image" alt="content.caption">
                <div id="caption">{{content.caption}}</div>
            </div>            
        </div>
    </transition>
    `
  }
  
  