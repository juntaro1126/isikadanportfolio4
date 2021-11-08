$(function(){

//↓不具合がでたら一番番下に設置する	
});

      




	  //モーダルの開くボタン 閉じるボタン
  
	  //「開く」がクリックされた場合
	  $('.header_right').on('click',function(){
		$('.modal').show();                         // モーダルウィンドウを表示
	  });
  
	  //「閉じる」がクリックされた場合 hideは一瞬で消す fadeOutは徐々に消す
	  $('.close').on('click',function(){
		$('.modal').fadeOut();                      // モーダルウィンドウを非表示
	  });
  
      //ハンバーガーメニューからモーダルに
	  $('.header_rightheader_right').on('click',function(){
		$('.modal').show();                         // モーダルウィンドウを表示
	  });




	  //カレンダー flatpickrの読み込み
	  flatpickr('.flatpickr');
	  //当日より前の日付は指定できない
	    const config = {
		minDate: "today",
        //日付の複数選択
		mode: "multiple",
		dateFormat: "Y-m-d",
	  }
	  flatpickr('.flatpickr', config);
      //カレンダー設定終わり

	  
	  
	  



	  
	  //フォーム送信ボタン
	  //今後追加予定
	  

	 
	   //お知らせタブ
       $('.tab_box .tab_btn').click(function() {
	     var index = $('.tab_box .tab_btn').index(this);
	     $('.tab_box .tab_btn, .tab_box .tab_panel').removeClass('active');
	     $(this).addClass('active');
	     $('.tab_box .tab_panel').eq(index).addClass('active');
       });




//レスポンシブ時のハンバーガーメニュー
$(function() {
	$('.btn-gNav').on("click", function(){
  
	  $(this).toggleClass('open');
	  $('#gNav').toggleClass('open');
	});
  
  });
  
  //ハンバーガーメニューのリストをクリックされたら、非表示にする
  $(function() {
	$('.gNav-menu li a').on("click", function(){
	   $('#gNav').removeClass('open');
	});
  });
  


  // スマホとタブレット時は無効
  //disable: 'mobile'

  // タブレットのみ無効
  //disable: 'tablet'
  
  //画面幅が1000px以下のとき無効
  //AOS.init({
  //  disable: function () {
  //      return window.innerWidth < 1000;
  //  }
  // });
  
  //AOS.js設定 一括設定
  AOS.init({
	//アニメーション時間
	duration: 3000,  

	// スマホのみ無効
	disable: 'phone'

  })


	
  
  
  
  

