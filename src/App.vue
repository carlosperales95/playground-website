<script setup>
// import scripts
import './main.scss'
import PipBoy from './components/PipBoy.vue'
import PipMock from './components/pipMock.vue';

</script>

<template>
  <div class="head">
    <h1>Sapokode Playground</h1>
  </div>

  <div class="hero">
    <div class="img">
      <img id="vaporsun" src="./assets/vaporsun.gif" alt="Vaporsun"> 
    </div>
    
    <!-- <div class="img">
      <PipBoy/>
    </div> -->

    <div class="img">
      <PipMock/>
    </div>
  </div>

  <!-- <div class="section">
    <h2>This is a whole section</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia. Sit amet nisl purus in mollis nunc. Neque viverra justo nec ultrices dui sapien eget. Viverra nam libero justo laoreet sit amet cursus sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Elementum eu facilisis sed odio morbi quis commodo odio. A pellentesque sit amet porttitor eget. At ultrices mi tempus imperdiet nulla. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Velit sed ullamcorper morbi tincidunt. Eu facilisis sed odio morbi quis commodo odio aenean sed. Amet cursus sit amet dictum. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Nibh ipsum consequat nisl vel pretium lectus quam.

Tincidunt arcu non sodales neque sodales ut etiam. Massa tempor nec feugiat nisl pretium fusce id velit. Enim sit amet venenatis urna cursus eget nunc. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Faucibus nisl tincidunt eget nullam non nisi est. Amet venenatis urna cursus eget nunc scelerisque viverra. Purus in mollis nunc sed id semper. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Sed id semper risus in. Mauris pharetra et ultrices neque ornare aenean euismod. Cursus sit amet dictum sit amet justo donec enim. Mauris in aliquam sem fringilla ut morbi. Pharetra convallis posuere morbi leo. Mauris nunc congue nisi vitae suscipit.

Ornare arcu odio ut sem nulla pharetra diam sit amet. Venenatis urna cursus eget nunc. Eu sem integer vitae justo. Leo duis ut diam quam nulla. Quisque sagittis purus sit amet. Auctor eu augue ut lectus arcu. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Felis donec et odio pellentesque diam. In arcu cursus euismod quis viverra. Orci a scelerisque purus semper eget duis. Et tortor consequat id porta. Massa ultricies mi quis hendrerit dolor magna. Dictum sit amet justo donec enim diam vulputate ut. Convallis a cras semper auctor neque. Nisi vitae suscipit tellus mauris a diam maecenas sed. Amet risus nullam eget felis eget nunc. Orci phasellus egestas tellus rutrum tellus pellentesque. Mauris cursus mattis molestie a iaculis at. Aliquam ut porttitor leo a diam sollicitudin tempor.

Congue quisque egestas diam in arcu cursus euismod quis. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Arcu odio ut sem nulla pharetra diam sit amet nisl. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Interdum posuere lorem ipsum dolor. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Iaculis at erat pellentesque adipiscing commodo elit at. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Mauris sit amet massa vitae tortor condimentum lacinia quis. Nec dui nunc mattis enim. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Sem nulla pharetra diam sit. Libero justo laoreet sit amet cursus sit amet dictum. Nunc vel risus commodo viverra. A arcu cursus vitae congue mauris rhoncus. Convallis tellus id interdum velit laoreet id donec.

Nullam ac tortor vitae purus. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Odio tempor orci dapibus ultrices. Neque convallis a cras semper. Velit laoreet id donec ultrices tincidunt arcu. Ac tortor vitae purus faucibus ornare suspendisse sed. Id diam vel quam elementum pulvinar. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Nibh praesent tristique magna sit amet purus gravida. Euismod lacinia at quis risus sed vulputate odio. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit.
    </p>

    <br/>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia. Sit amet nisl purus in mollis nunc. Neque viverra justo nec ultrices dui sapien eget. Viverra nam libero justo laoreet sit amet cursus sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Elementum eu facilisis sed odio morbi quis commodo odio. A pellentesque sit amet porttitor eget. At ultrices mi tempus imperdiet nulla. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Velit sed ullamcorper morbi tincidunt. Eu facilisis sed odio morbi quis commodo odio aenean sed. Amet cursus sit amet dictum. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Nibh ipsum consequat nisl vel pretium lectus quam.

Tincidunt arcu non sodales neque sodales ut etiam. Massa tempor nec feugiat nisl pretium fusce id velit. Enim sit amet venenatis urna cursus eget nunc. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Faucibus nisl tincidunt eget nullam non nisi est. Amet venenatis urna cursus eget nunc scelerisque viverra. Purus in mollis nunc sed id semper. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Sed id semper risus in. Mauris pharetra et ultrices neque ornare aenean euismod. Cursus sit amet dictum sit amet justo donec enim. Mauris in aliquam sem fringilla ut morbi. Pharetra convallis posuere morbi leo. Mauris nunc congue nisi vitae suscipit.

Ornare arcu odio ut sem nulla pharetra diam sit amet. Venenatis urna cursus eget nunc. Eu sem integer vitae justo. Leo duis ut diam quam nulla. Quisque sagittis purus sit amet. Auctor eu augue ut lectus arcu. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Felis donec et odio pellentesque diam. In arcu cursus euismod quis viverra. Orci a scelerisque purus semper eget duis. Et tortor consequat id porta. Massa ultricies mi quis hendrerit dolor magna. Dictum sit amet justo donec enim diam vulputate ut. Convallis a cras semper auctor neque. Nisi vitae suscipit tellus mauris a diam maecenas sed. Amet risus nullam eget felis eget nunc. Orci phasellus egestas tellus rutrum tellus pellentesque. Mauris cursus mattis molestie a iaculis at. Aliquam ut porttitor leo a diam sollicitudin tempor.

Congue quisque egestas diam in arcu cursus euismod quis. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Arcu odio ut sem nulla pharetra diam sit amet nisl. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Interdum posuere lorem ipsum dolor. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Iaculis at erat pellentesque adipiscing commodo elit at. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Mauris sit amet massa vitae tortor condimentum lacinia quis. Nec dui nunc mattis enim. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Sem nulla pharetra diam sit. Libero justo laoreet sit amet cursus sit amet dictum. Nunc vel risus commodo viverra. A arcu cursus vitae congue mauris rhoncus. Convallis tellus id interdum velit laoreet id donec.

Nullam ac tortor vitae purus. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Odio tempor orci dapibus ultrices. Neque convallis a cras semper. Velit laoreet id donec ultrices tincidunt arcu. Ac tortor vitae purus faucibus ornare suspendisse sed. Id diam vel quam elementum pulvinar. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Nibh praesent tristique magna sit amet purus gravida. Euismod lacinia at quis risus sed vulputate odio. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit.
    </p>
  </div> -->
</template>

