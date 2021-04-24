((that)=>{
    var Safer=function(){
        this.keywords=[
            '自杀',
            '安眠药'
        ];
        this.getKeywords=function(){return this.keywords};
        this.addKeyword=function(keyword){
            if( Array.isArray(keyword) )this.addKeywords(keyword);
            else if( !this.keywords.includes(keyword) )this.keywords.push(keyword);
        };
        this.addKeywords=function(keywords){
            for( let keyword  of keywords){
                this.addKeyword(keyword);
            }
        };
        this.match=function(content='',mode=0){
            switch( mode ){
            case 0:
                return inner.commonMatch(this.keywords,content);
            case 1:
    
            default:
    
            }
        };
    };
    var matchType={
        'common':'模糊匹配',
        'sameCommon':'完全匹配'
    };
    var inner={};
    inner.commonMatch=(keywords,content,must=false)=>{
        return inner.arrayEach(keywords,keyword=>{
            if( !must && content.indexOf(keyword)!=-1 )return {
                exit:true,
                data:{
                    isMatch:true,
                    keyword:keyword,
                    type:matchType['common'],
                    content:content
                }
            };
            if( must && content==keyword )return {
                exit:true,
                data:{
                    isMatch:true,
                    keyword:keyword,
                    type:matchType['sameCommon'],
                    content:content
                }
            };
            return {
                exit:false
            };
        },{
            isMatch:false,
            content:content
        });
    }
    inner.arrayEach=(arr,callabck,retModule={})=>{
        for( let item of arr ){
            let result=callabck(item);
            if( result.exit ){
                return result.data;
            }
        }
        return retModule;
    }
    if( that.Safer==undefined ){
        that.Safer=function(){
            this.__proto__=new Safer();
        };
    };
})(window);