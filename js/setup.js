var number = document.getElementById('box');
        for(i=0; i<4; i++){
            var span = document.createElement('span');
            span.textContent = i;
            number.appendChild(span);
        }
        var num = number.getElementsByTagName('span');
        var index = 0;

        function adicao(){
            num[index].style.display = 'none';
            index = (index + 1) % num.length;
            num[index].style.display = 'initial';
        }

        function subtracao(){
            num[index].style.display = 'none';
            index = (index - 1 + num.length) % num.length;
            num[index].style.display = 'initial';
        }
$('.sajid-1').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});