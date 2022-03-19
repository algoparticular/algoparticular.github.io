export default {
    props: {
      show: Boolean,
      content: Object
    },
    template: `
    <transition name="modal">
        <div v-if="show" id="gallery-modal" class="modal" v-on:click="$emit('close')">
            <div class="modal-content">
                <img v-bind:src="content.image" alt="content.caption">
                <div id="caption">{{content.caption}}</div>
            </div>            
        </div>
    </transition>
    `
  }
  
  