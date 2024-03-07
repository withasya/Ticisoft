document.getElementById('dropdownMenuButton1').addEventListener('mouseenter', function () {
    this.setAttribute('aria-expanded', 'true');
    this.nextElementSibling.classList.add('show');
});

document.getElementById('dropdownMenuButton1').addEventListener('mouseleave', function () {
    this.setAttribute('aria-expanded', 'false');
    this.nextElementSibling.classList.remove('show');
});

document.getElementById('dropdownMenuButton2').addEventListener('mouseenter', function () {
    this.setAttribute('aria-expanded', 'true');
    this.nextElementSibling.classList.add('show');
});

document.getElementById('dropdownMenuButton2').addEventListener('mouseleave', function () {
    this.setAttribute('aria-expanded', 'false');
    this.nextElementSibling.classList.remove('show');
});

const nextIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">\n' +
    '  <path style="color: #ff6720;" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>\n' +
    '</svg>';
const prevIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">\n' +
    '  <path style="color: #ff6720;" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>\n' +
    '</svg>';

$(document).ready(function(){
    $('#owlCarousel1').owlCarousel({
        loop:true,
        items:5,
        margin:10,
        nav:true,
        mouseDrag:true,
        center: true,
        navText: [
            prevIcon,
            nextIcon
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2.5
            },
        }
    });});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:5,
        margin:10,
        nav:true,
        mouseDrag:false,
        center: true,
        navText: [
            prevIcon,
            nextIcon
        ],
        responsive:{
            0:{
                items:1
            },
            560:{
                items:1.5
            },
            740:{
                items:2
            },
            991:{
                items:2.5
            },
            1150:{
                items:3
            },
            2000:{
                items:4
            },

        }
    });});


jQuery.fn.extend({
    rating: function(options){
        if(typeof(options)=='undefined') options={};
        var ratings=[];
        objs=this;
        if(objs.length){
            for(var i=0;i<objs.length;i++){
                ratings.push(new simpleRating(options,objs[i]));
            }
        }
    },
});

class simpleRating{
    constructor(options,obj) {
        this.obj=obj;
        this.options=options;
        this.rating=0;
        this.init();
    }

    init(){
        var html='<div class="simple-rating star-rating">';
        for(var i=0;i<5;i++){html+='<i class="fa fa-star-o" data-rating="'+(i+1)+'"></i>';}
        html+='</div>';

        $(this.obj)
            .attr('type','hidden')
            .after(html);

        $(this.obj).next().children().click({classObj:this},function(e){
            e.data.classObj.rate(this);
        });

        $(this.obj).next().children().mouseenter({classObj:this},function(e){
            e.data.classObj.setstars($(this).data('rating'));
        });

        $(this.obj).next().children().mouseleave({classObj:this},function(e){
            e.data.classObj.setstars(e.data.classObj.rating);
        });
    }

    rate(obj){
        var rating=$(obj).data('rating');
        $(obj).parent().prev().val(rating);
        this.rating=rating;
        this.refresh();
    }

    refresh(){
        this.setstars(this.rating);
    }

    setstars(rating){
        var stars=$(this.obj).next().children();
        for(var i=0;i<5;i++){
            var starObj=$(this.obj).next().children()[i];
            if(i<rating){
                $(starObj).removeClass('fa-star-o');
                $(starObj).addClass('fa-star');
            }else{
                $(starObj).addClass('fa-star-o');
                $(starObj).removeClass('fa-star');
            }
        }
    }
}

var rt = document.querySelector(".copy-text")
    , ot = document.querySelector(".copy-button");
rt && ot && ot.addEventListener("click", ()=>{
        navigator.clipboard.writeText(rt.innerText)
    }
);
var ya = document.querySelector(".js-reduce-button")
    , Ea = document.querySelector(".js-plus-button")
    , Ta = document.querySelectorAll(".js-font");
Ta.forEach(e=>{
        if (e) {
            let t = Number(window.getComputedStyle(e).fontSize.split("px")[0]);
            console.log(t),
                ya?.addEventListener("click", ()=>{
                        e.style.fontSize = `${t -= 2}px`
                    }
                ),
                Ea?.addEventListener("click", ()=>{
                        e.style.fontSize = `${t += 2}px`
                    }
                )
        }
    }
);