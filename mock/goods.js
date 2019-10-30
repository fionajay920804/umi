// List of class
const course = {
  data:{
    'Javascript':[
      {
        id:1,
        name:'ES6 Practice',
        img:'LearnES6_Final.png',
        price:'100',
        solded:'561',
      },
      {
        id:2,

        name:'Typescript Practice',
        img:'Typescript_Plumbing_image.png',
        price:'100',
        solded:'156',
      },
      {
        id:3,

        name:'Javascript Algorithms',
        img:'JSBasic-Algorithms_Final.png',
        price:'100',
        solded:'526',
      },

    ],

    'React':[
      {
        id:4,

        name:'ReactBeginners',
        img:'ReactBeginners.png',
        price:'100',
        solded:'536',
      },
      {
        id:5,

        name:'ReactNative',
        img:'ReactNative.png',
        price:'100',
        solded:'456',
      },
      {
        id:6,

        name:'React Server',
        img:'ReactNextServer_Final.png',
        price:'100',
        solded:'556',
      },
      {
        id:7,

        name:'Redux Saga',
        img:'ReduxSaga.png',
        price:'100',
        solded:'2256',
      },
      {
        id:8,

        name:'react PWA',
        img:'PWAReact_Final.png',
        price:'100',
        solded:'1156',
      },
      {
        id:9,

        name:'React Hooks',
        img:'SimplifyHooks_Final.png',
        price:'100',
        solded:'5361',
      },
      {
        id:10,

        name:'React Mobx',
        img:'React_Mobx_TS.png',
        price:'100',
        solded:'956',
      },
    ],
    'Vuejs':[
      {
        id:11,

        name:'Vue Practice',
        img:'VueJS_Final.png',
        price:'180',
        solded:'586',
      },

      {
        id:12,

        name:'Vuejs PWA',
        img:'VuePwa.png',
        price:'100',
        solded:'596',
      },
      {
        id:13,

        name:'TS and Vuejs',
        img:'TSVue_Final.png',
        price:'100',
        solded:'526',
      },

    ],
    'Git':[
      {
        id:14,

        name:'Github',
        img:'github.png',
        price:'99',
        solded:'10',
      },
      {
        id:15,

        name:'Git version control',
        img:'LearnGit.png',
        price:'49',
        solded:'180',
      },

    ],
    'Test':[
      {
        id:16,

        name:'Puppetee',
        img:'TestGooglePuppeteer_Final.png',
        price:'10',
        solded:'56',
      },
      {
        id:17,

        name:'jest in React',
        img:'TestReactJest.png',
        price:'30',
        solded:'10',
      },
    ],
    'Python':[
      {
        id:18,

        name:'Python',
        img:'IntroPython.png',
        price:'100',
        solded:'56',
      },
    ],
    'Node.js':[

      {
        id:19,

        name:'Docker with nodejs',
        img:'NodeDocker_1000.png',
        price:'100',
        solded:'56',
      },
      {
        id:20,

        name:'AWS with nodejs',
        img:'NodeAWSServerless_Final.png',
        price:'100',
        solded:'56',
      },

    ],
    'GraphQL':[
      {
        id:21,

        name:'GraphQL',
        img:'GraphQL_Final.png',
        price:'100',
        solded:'56',
      },
    ]
  },
  tags:['Javascript','React','Vuejs','Git','Test','Python','Node.js','GraphQL']
}
// classify class
course.tags.forEach(tag=>{
  course.data[tag].forEach(v=>{
    v.tag = tag
  })
})
export default {
  // "method url": Object 或 Array
  // "get /api/goods": {
  //   result: data
  // },
  // "method url": (req, res) => {}
  "get /api/goods": function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 0,
        result: course
      });
    }, 2500);
  }
};
