(function($){
	if(!$.my){$.my=function(){}}
	$.my.MYUtils = function(){
		return new MYUtils();
	}
	function MYUtils(){
	}
	MYUtils.prototype={
		sayHello:function(){
			console.log("Hello!");
			alert("Hello!");
		}
	}
})(jQuery);