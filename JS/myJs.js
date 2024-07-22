let baseUrl = "www.themealdb.com/api/json/v1/1/"

function closeSideBar(){
    $(".sideBar").animate({left:"-240px"},500)
    $(".open").removeClass("fa-x").addClass("fa-bars")
    $(".closeBar ul li").animate({
        top: 300
    }, 500)
}
function openSideBar(){
    $(".sideBar").animate({left:"0px"},500)
    $(".open").removeClass("fa-bars").addClass("fa-x");

    for (let i = 0; i < 5; i++) {
        $(".closeBar ul li").eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }
}

$(".open").on("click",function(){
    if($(".sideBar").css("left") == "0px"){
        closeSideBar()
    }else{
        openSideBar()

    }
})



// ----------------------------------------------------------------
var allMovies = []

async function getNowTrending(){
    let response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let finalData = await response.json();
    allMovies = finalData.results;
    // displayMovies(finalRes)9
    displayMovies(allMovies);
    console.log(allMovies);
}
getNowTrending()

function forHover(){
    $(".movieBox").hover(function(e){
        let {target} = e
        $(target).next().css({
            "opacity" : "1"
        })
        $(".movieBox img").css({
            "scale" : "1.1",
            "transform" : "rotate(5deg)"
        })
    },function(e){
        let {target} = e
        $(target).next().css({
            "opacity" : "0"
        })
        // $(".movieBox img").css({
        //     "scale" : "1.1",
        //     "transform" : "rotate(5deg)"
        // })
        
    }
    )
}
function displayMovies(allMovies){
    var cartona = ``;
    for(var i = 0; i<allMovies.length; i++){
        cartona += `<div class="col-md-4 position-relative movieBox">
                    <div class="movies">

                        <img src="https://image.tmdb.org/t/p/w500/${allMovies[i].backdrop_path  }" class="w-100">
                        <div class="movieCaption text-white position-absolute">
                            <h2 class="text-center">${allMovies[i].original_title}</h2>
                            <p>${allMovies[i].overview}</p>
                            <p>release date : ${allMovies[i].first_air_date}</span></p>
                            <h3>***</h3>
                            <h3>${allMovies[i].vote_average}</h3>
                        </div>
                    </div>
                </div>`
    }
    document.getElementById('rowData').innerHTML = cartona;
}
