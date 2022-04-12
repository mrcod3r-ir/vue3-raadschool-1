Vue.createApp({
    data() {
      return {
        message: 'Hello Vue!',
        taskTitle:'',
        taskDesc:'',
        showDesc:true,
        displayRemoveModal:false,
        removeItemIndex:null,
        doList:[
          {
           
            title:"Lorem, ipsum.",
            desc:'some description 1',
            completed:false,
          },
          {
           
            title:"Lorem, ipsum dolor.",
            desc:'some description 3',
            completed:false,
          },
          {
           
            title:"asjdfasdf ",
            desc:'some description 4',
            completed:true,
          },
          {
           
            title:"as4df6 Lorem, ipsum.",
            desc:'some description f',
            completed:false,
          },
        ],

      }
    },
    methods:{
      // add typed title to dolist
      addTask(){
        if(this.taskTitle.length > 0) {
          // task var
          var task = {
            title:this.taskTitle,
            desc:this.taskDesc,
            completed:false,
          }
          // add task to doList array
          this.doList.unshift(task)
          // reset taskTitle value
          this.taskTitle = ''
          this.taskDesc = ''
        }
      },
      showRemoveModal(i){

        // show modal
        this.displayRemoveModal = true;
        this.removeItemIndex = i
      },
      removeItem(index){
        // show modal
        // this.showRemoveModal = true;
        this.doList.splice(index, 1);
        this.displayRemoveModal = false;
        this.removeItemIndex = null
      }
    }
  }).mount('#app')