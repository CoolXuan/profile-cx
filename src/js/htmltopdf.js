//导出页面为PDF格式
import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';
 
const htmlToPdf = {
    getPdf(title,content){
        html2canvas(content,{
            allowTaint:true,
            scale: 3,// 清晰度
        }).then(canvas=>{
            var context = canvas.getContext('2d');
            // 设置字体样式
            context.font = '24px SimSun, Songti SC';
            context.fillText('24px的宋体呈现', 20, 50);
            //内容的宽度
            let contentwidth =canvas.width;//内容的高度
            let contentHeight = canvas.height;
            //一页pdf显示html页面生成的canvas高度，a4纸的尺寸[595.28,841.89];
            let pageHeight =contentwidth/ 592.28 * 841.89;
            //未生成pdf的html页面高度
            let leftHeight = contentHeight//页面偏移
            let position = 0;
            //a4纸的尺寸[595.28,841.89], html页面生成的canvas在pdf中图片的宽高
            let imgwidth=600;
            let imgHeight =1000 / contentwidth * contentHeight;
            //canvas转图片数据
            let pageData = canvas.toDataURL( 'img/jpeg',1.0);//新建JsPDF对象
            let PDF = new JsPDF( '', 'pt' , 'a4'); //判断是否分页
            if(leftHeight < pageHeight){
                PDF.addImage(pageData, 'JPEG',0,0,imgwidth,imgHeight);
            }else{
                while(leftHeight>0){
                    PDF.addImage(pageData, 'JPEG',0, position,imgwidth,imgHeight);
                    leftHeight -= pageHeight;
                    position -= 841.89;
                    if(leftHeight > 0){
                        PDF.addPage()
                    }
                }
            }
            console.log(pageData)//(获取压缩的PDF文件图片数据)
            //保存文件
            PDF.save(title + '.pdf')
        })
    }
};
 
export default htmlToPdf;