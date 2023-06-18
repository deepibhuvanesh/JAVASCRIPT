function on()
{
    let bulb=document.getElementById('img1').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    let cat=document.getElementById('img2').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    let btn1=document.getElementById('btn1');
    btn1.style.backgroundColor='green';
    let btn2=document.getElementById('btn2');
    btn2.style.backgroundColor='white';
}
function off()
{
    let bulb=document.getElementById('img1').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    let cat=document.getElementById('img2').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    let btn2=document.getElementById('btn2');
    btn2.style.backgroundColor='red';
    let btn1=document.getElementById('btn1');
    btn1.style.backgroundColor='white';
}