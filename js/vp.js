let sp_content2=$('.sp_content2'),sp_title2=$('.sp_title2');
sp_content2.hide();
sp_title2.on('click',function(){
 let inx=$('.sp_title2').index(this);
 if($(sp_content2[inx]).css('display')==='none'){
 $(sp_content2).slideUp(100);
 $(sp_content2[inx]).slideDown(100);
 }else{
 $(sp_content2).slideUp(100);
 }
})