<template>
  <div class="module-wrapper">
    <h2>{{ title }}</h2>
    <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore e empor
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore e empor
      Lorem ipsum dolor sit amet, </P>
    <div class="module-item-wrapper">
      <h3>Modules</h3>
      <div class="module-item" v-for="(item) in modules" :key="item.index">
        <div class="number-div">
          <h3>{{ item.CourseID }}</h3>
        </div>
        <div class="img-wrapper">
          <img :src="item.CourseTile" alt="">
        </div>
        <div class="content-wrapper">
          <h3 class="small">Module {{ item.CourseID }}</h3>
          <div class="progress-wrapper">
            <div class="progress-out">
              <div class="progress-bar" :style="'width:'+item.progress + '%'">
              </div>
            </div>
            <p class="small">{{ item.progress }}%</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name: 'ModuleComponent',
  props: ['title'],
  components: {},
  data() {
    return {
      modules: [
        {
          CourseID: "1",
          Title: "Module 1 | Power of silence",
          Time: "10",
          ShortTag: "Focus is power, power is focus",
          LongTag: "Getting distracted all the time? Lets get your focus straight",
          CourseIcon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Target_Flat_Icon.svg",
          CourseTile: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&dl=paul-skorupskas-7KLa-xLbSXA-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
          CourseURL: "powerfocus",
          TrailerURL: "https://www.youtube.com/watch?v=Ym9a6kuoLVc",
          Modules: [
            "1a",
            "1b",
            "1c",
            "1d",
            "1e"
          ],
          NumAssignments: 5,
          progress: 34
        },
        {
          CourseID: "2",
          Title: "Module 2 | Attention ",
          Time: "10",
          ShortTag: "Grow yourself to be a steady grower",
          LongTag: "Growth mindset, everything is hard before it comes easy ",
          CourseIcon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Target_Flat_Icon.svg",
          CourseTile: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&dl=paul-skorupskas-7KLa-xLbSXA-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
          CourseURL: "steadyoak",
          TrailerURL: "https://www.youtube.com/watch?v=tbnzAVRZ9Xc&t=412s",
          Modules: [
            "2a",
            "2b",
            "2c",
            "2d"
          ],
          NumAssignments: 4,
          progress: 34
        },
        {
          CourseID: "3",
          Title: "Module 3 | Rest of war",
          Time: "12",
          ShortTag: "Communicate to create ",
          LongTag: "Study all the techniques of the great communicators",
          CourseIcon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Target_Flat_Icon.svg",
          CourseTile: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&dl=paul-skorupskas-7KLa-xLbSXA-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
          CourseURL: "communication",
          TrailerURL: "https://www.youtube.com/watch?v=VSceuiPBpxY&t=601s",
          Modules: [
            "3a",
            "3b",
            "3c",
            "3d"
          ],
          NumAssignments: 4,
          progress: 54
        },
        {
          CourseID: "4",
          Title: "Module 4 | Meditation ",
          Time: "15",
          ShortTag: "Influence and get what you want",
          LongTag: "Master getting things done with your influence ",
          CourseIcon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Target_Flat_Icon.svg",
          CourseTile: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&dl=paul-skorupskas-7KLa-xLbSXA-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
          CourseURL: "influence",
          TrailerURL: "https://www.youtube.com/watch?v=VSceuiPBpxY&t=601s",
          Modules: [
            "4a",
            "4b",
            "4c",
            "4d",
            "4e"
          ],
          NumAssignments: 5,
          progress: 64
        },
        // {
        //   CourseID: "5",
        //   Title: "Module 5 | Food wisdom ",
        //   Time: "14",
        //   ShortTag: "You are what you eat!",
        //   LongTag: "Check out which kind of food you can benefit from ",
        //   CourseIcon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Target_Flat_Icon.svg",
        //   CourseTile: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&dl=paul-skorupskas-7KLa-xLbSXA-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
        //   CourseURL: "foodwisdom",
        //   TrailerURL: "https://www.youtube.com/watch?v=VSceuiPBpxY&t=601s",
        //   Modules: [
        //     "5a",
        //     "5b",
        //     "5c",
        //     "5d"
        //   ],
        //   NumAssignments: 4,
        //   progress: 24
        // },
        // {
        //   CourseID: "6",
        //   Title: "Module 6 | Resting",
        //   Time: "10",
        //   ShortTag: "Posting less, doing more",
        //   LongTag: "Discover the psychology behind the tech you use every day",
        //   CourseIcon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Target_Flat_Icon.svg",
        //   CourseTile: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&dl=paul-skorupskas-7KLa-xLbSXA-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
        //   CourseURL: "socialmedia",
        //   TrailerURL: "https://www.youtube.com/watch?v=VSceuiPBpxY&t=601s",
        //   Modules: [
        //     "6a",
        //     "6b",
        //     "6c",
        //     "6d",
        //     "6e"
        //   ],
        //   NumAssignments: 5,
        //   progress: 70
        // },
        // {
        //   CourseID: "7",
        //   Title: "Module 7 | Brain Boost",
        //   Time: "15",
        //   ShortTag: "Fire up your brain ",
        //   LongTag: "Learn tricks and hacks to reach the full potential of your brain",
        //   CourseIcon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Target_Flat_Icon.svg",
        //   CourseTile: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&dl=paul-skorupskas-7KLa-xLbSXA-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
        //   CourseURL: "brainboost",
        //   TrailerURL: "https://www.youtube.com/watch?v=VSceuiPBpxY&t=601s",
        //   Modules: [
        //     "7a",
        //     "7b",
        //     "7c",
        //     "7d"
        //   ],
        //   NumAssignments: 4,
        //   progress: 30
        // }
      ],

    }
  },
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
