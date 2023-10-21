/* 버튼 0누르면
  - 버튼0,1,2에 붙어있던 orange 클래스명 전부 제거하라고 코드 3줄 짜기
  - 버튼0에 orange 클래스명 부착
  - 박스0,1,2에 붙어있던 show 클래스명 전부 제거하라고 코드 3줄 짜기
  - 박스0에 show 클래스명 부착
  */
  
  // js 버전으로는 어떻게 짜야하는지 질문하기
  //js버전
  // document.querySelectorAll('.tab-button')[0].addEventListener('click', function(){
  //   document.querySelectorAll('.tab-button')[0].classList.remove('orange');
  //   document.querySelectorAll('.tab-button')[1].classList.remove('orange');
  //   document.querySelectorAll('.tab-button')[2].classList.remove('orange');
  //   document.querySelectorAll('.tab-button')[0].classList.add('orange');
  //   document.querySelectorAll('.tab-content')[0].classList.remove('show');
  //   document.querySelectorAll('.tab-content')[1].classList.remove('show');
  //   document.querySelectorAll('.tab-content')[2].classList.remove('show');
  //   document.querySelectorAll('.tab-content')[0].classList.add('show');
  // })

  //jQuery버전
  for(let i = 0; i < $('.tab-button').length; i++){
    $('.tab-button').eq(i).on('click',function(){
      $('.tab-button').removeClass('orange');
      $('.tab-button').eq(i).addClass('orange');
      $('.tab-content').removeClass('show');
      $('.tab-content').eq(i).addClass('show');
    });
    }

  // $(".tab-button")
  //   .eq(1)
  //   .on("click", function () {
  //     $(".tab-button").removeClass("orange");
  //     $(".tab-button").eq(1).addClass("orange");
  //     $(".tab-content").removeClass("show");
  //     $(".tab-content").eq(1).addClass("show");
  //   });

  // $(".tab-button")
  //   .eq(2)
  //   .on("click", function () {
  //     $(".tab-button").removeClass("orange");
  //     $(".tab-button").eq(2).addClass("orange");
  //     $(".tab-content").removeClass("show");
  //     $(".tab-content").eq(2).addClass("show");
  //   });