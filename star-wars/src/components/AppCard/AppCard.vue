<!--<template>-->
  <!--<v-layout>-->
    <!--<v-flex xs12 sm6 offset-sm3>-->
      <!--<v-card>-->
        <!--<v-img-->
          <!--src=""-->
          <!--width="300px" height="400px"-->
        <!--/>-->

        <!--<v-card-title primary-title>-->
          <!--<div>-->
            <!--<h3 class="headline mb-0">Kangaroo Valley Safari</h3>-->
            <!--<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>-->
          <!--</div>-->
        <!--</v-card-title>-->

        <!--<v-card-actions>-->
          <!--<v-btn flat color="orange">Share</v-btn>-->
          <!--<v-btn flat color="orange">Explore</v-btn>-->
        <!--</v-card-actions>-->
      <!--</v-card>-->
    <!--</v-flex>-->
  <!--</v-layout>-->
<!--</template>-->
<template>
  <v-layout row>
    <v-flex xs12 sm3 offset-sm3>
      <v-card>
        <v-img
          src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2014/05/a-new-hope.jpg"
          height="600px" width="400px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">A New Hope</div>
            <span class="grey--text">Director</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="purple" @click="show = !show">Spoiler</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script type="text/javascript">
export default {
  name: 'AppCard',
  data: () => ({
    show: false
  })
}
</script>
