/**
 *  @author  zhanglijie  
 *  @version 1.0.0
 */
//Component Object
Component({
    properties: {
        myProperty:{
            type:String,
            value:'',
            observer: function(){}
        },

    },
    data: {
        test: 1
    },
    methods: {
        
    },
    created: function(){

    },
    attached: function(){

    },
    ready: function(){
        setTimeout(() => {
            this.setData({
                test: 2
            })
        }, 2000);
    },
    moved: function(){

    },
    detached: function(){

    },
});