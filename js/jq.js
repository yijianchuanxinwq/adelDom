var count=0;
//function btn(){
//		$("ul").append("<li onclick='delFn("+count+")' class='a"+count+"'>"+count+"部分</li>")
//		count++;
//}
//function delFn(e){
//	console.log("a"+e);
//	$(".a"+e).remove();
//}


$(".btn").on('click',function(){
	$("ul").append("<li class='a'>"+count+"部分</li>") 
	count++;
	delFn($("li"));
})
function delFn(e){
	e.on('click',function(){
		$(this).remove();
	})
}
