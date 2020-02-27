/**
 * @author  zhanglijie
 * @version 1.0
 */
Component({
    properties: {
        // webview url
        webview:{
            type:String,
            value:'https://www.baidu.com',
            observer: function(newVal: string, oldVal: string){
                console.log(newVal, oldVal);
            }
        },

    },
    data: {

    },
    methods: {
        bindMessage(e) {
            console.log(e, '接收值');
        }
    },
    created: function(){

    },
    attached: function(){

    },
    ready: function(){

    },
    moved: function(){

    },
    detached: function(){

    },
});