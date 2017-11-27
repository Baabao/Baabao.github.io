$(document).ready(function(){
  // 切換數據圖表
  $('.chart-header > .nav-tab > li').click(function() {
      $('.chart-area').addClass('hide');
      var index = $(this).index();
      $('.chart-area').eq(index).removeClass('hide');
  });

  // 開啟 player
  $('.btn-play').click(function() {
      $('body').addClass('player-open');
      $('.player').addClass('open');
      $('.btn-play').addClass('hide');
      $('.btn-pause').addClass('hide');
      $('.btn-spinner').removeClass('hide');
      setTimeout(function(){
          $('.btn-spinner').addClass('hide');
          $('.btn-pause').removeClass('hide');
          $(function() {
            $('.seeking-progress').animate({width:'100%'}, 200000, 'linear');
            $('.seeking-handle').animate({left:'100%'}, 200000, 'linear');
            var percent = 0;
            var pointer = setInterval(function() {
              if (percent > 100) {
                clearInterval(pointer);
                return;
              }
            });
          });
      }, 2000);
  });
  $('.btn-pause').click(function() {
      $('.btn-pause').addClass('hide');
      $('.btn-play').removeClass('hide');
      $('.seeking-progress').stop();
      $('.seeking-handle').stop();
  });

  //不要切換我的訂閱的 play 按鈕
  $('.sb-pg-content .btn-play').click(function(){
      $('.sb-pg-content .btn-play').removeClass('hide');
      $(this).parents('.list-other-ep li').addClass('played');
  });

  //不要切換 play 按鈕
  $('.card-artwork .btn-play').click(function(){
      $('.card-artwork .btn-play').removeClass('hide');
  });

  // 點擊空白處關閉 Dropdown
  $('body').mouseup(function(e){
      if($('.dropdown-menu').hasClass('show')) {
          var _con = $('.dropdown');
          if(!_con.is(e.target) && _con.has(e.target).length === 0){
              $('.dropdown-menu').removeClass('show');
          }
      };
  });

  // 開關 Dropdown
  $.fn.toggleNav = function(){
		$(this).click(function(){
			$(this).next('.dropdown-menu').toggleClass('show');
		});
  };

  $('.btn-dropdown-toggle').toggleNav();

  // 點擊選項切換高亮效果
  $('.list > li > a').click(function(){
  	$('.list li').removeClass('active');
  	$(this).parent('li').addClass('active');
  });

  $('.nav-tab a').click(function(){
  	$('.nav-tab li').removeClass('active');
  	$(this).parent('li').addClass('active');
  });

  // 點擊按鈕關閉 Modal
  $.fn.closeModal = function(){
      $(this).click(function(){
          $('.modal').removeClass('in');
          setTimeout(function(){
              $('body').removeClass('modal-open');
              $('.modal-backdrop').removeClass('in');
              $('.modal-backdrop').addClass('hide');
              $('.modal').addClass('hide');
          }, 200);
      });
  };

	$('.btn-close-modal').closeModal();

	$('.modal-footer .btn').closeModal();

    $('#modal-login .btn').closeModal();

    // 點擊空白處關閉 Modal
    $('.modal').mousedown(function(e){
        var _con = $(' .modal-dialog ');
        if(!_con.is(e.target) && _con.has(e.target).length === 0){
            $('.modal').removeClass('in');
            setTimeout(function(){
                $('body').removeClass('modal-open');
                $('.modal-backdrop').removeClass('in');
                $('.modal-backdrop').addClass('hide');
                $('.modal').addClass('hide');
            }, 200);
        }
    });

    // 開啟建立節目 Modal
    $('.btn-create-pg').click(function(){
    	$('body').addClass('modal-open');
		$('#modal-create-pg').removeClass('hide');
        $('.modal-backdrop').removeClass('hide');
        setTimeout(function(){
            $('.modal-backdrop').addClass('in');
            $('#modal-create-pg').addClass('in');
        }, 200);
	});

  // 開啟建立單集 Modal
  $('.btn-create-ep').click(function(){
  	$('body').addClass('modal-open');
      $('#modal-create-ep').removeClass('hide');
	$('.modal-backdrop').removeClass('hide');
      setTimeout(function(){
          $('.modal-backdrop').addClass('in');
          $('#modal-create-ep').addClass('in');
      }, 200);
	});

  // 開啟編輯節目 Modal
  $('.btn-edit-pg').click(function(){
  	$('body').addClass('modal-open');
	$('#modal-edit-pg').removeClass('hide');
      $('.modal-backdrop').removeClass('hide');
      setTimeout(function(){
          $('.modal-backdrop').addClass('in');
          $('#modal-edit-pg').addClass('in');
      }, 200);
	});

  // 開啟編輯單集 Modal
  $('.btn-edit-ep').click(function(){
  	$('body').addClass('modal-open');
	$('#modal-edit-ep').removeClass('hide');
      $('.modal-backdrop').removeClass('hide');
      setTimeout(function(){
          $('.modal-backdrop').addClass('in');
          $('#modal-edit-ep').addClass('in');
      }, 200);
	});

  // 開啟刪除節目 Modal
  $('.btn-delete-pg').click(function(){
  	$('body').addClass('modal-open');
	$('#modal-delete-pg').removeClass('hide');
      $('.modal-backdrop').removeClass('hide');
      setTimeout(function(){
          $('.modal-backdrop').addClass('in');
          $('#modal-delete-pg').addClass('in');
      }, 200);
	});

  // 開啟刪除單集 Modal
  $('.btn-delete-ep').click(function(){
  	$('body').addClass('modal-open');
	$('#modal-delete-ep').removeClass('hide');
      $('.modal-backdrop').removeClass('hide');
      setTimeout(function(){
          $('.modal-backdrop').addClass('in');
          $('#modal-delete-ep').addClass('in');
      }, 200);
	});

  // 開啟分享節目 Modal
  $('.btn-share-pg').click(function(){
  	$('body').addClass('modal-open');
	$('#modal-share-pg').removeClass('hide');
      $('.modal-backdrop').removeClass('hide');
      setTimeout(function(){
          $('.modal-backdrop').addClass('in');
          $('#modal-share-pg').addClass('in');
      }, 200);
	});

  // 開啟分享單集 Modal
  $('.btn-share-ep').click(function(){
  	$('body').addClass('modal-open');
	$('#modal-share-ep').removeClass('hide');
      $('.modal-backdrop').removeClass('hide');
      setTimeout(function(){
          $('.modal-backdrop').addClass('in');
          $('#modal-share-ep').addClass('in');
      }, 200);
	});

  // 開啟登入 Modal
  $('.btn-login').click(function(){
  	$('body').addClass('modal-open');
	$('#modal-login').removeClass('hide');
      $('.modal-backdrop').removeClass('hide');
      setTimeout(function(){
          $('.modal-backdrop').addClass('in');
          $('#modal-login').addClass('in');
      }, 200);
	});

  // 開啟成為製作人 Modal
  $('.btn-apply').click(function(){
  	$('body').addClass('modal-open');
	$('#modal-apply').removeClass('hide');
      $('.modal-backdrop').removeClass('hide');
      setTimeout(function(){
          $('.modal-backdrop').addClass('in');
          $('#modal-apply').addClass('in');
      }, 200);
	});

  // 切換分享與嵌入的內容
  $('#modal-share-ep .nav-tab li').click(function() {
      $('#modal-share-ep .modal-content').addClass('hide');
      var index = $(this).index();
      $('#modal-share-ep .modal-content').eq(index).removeClass('hide');
      $('#modal-share-ep .nav-tab li').removeClass('active');
      $(this).addClass('active');
  });

  // 切換嵌入樣式
  $('#modal-share-ep .modal-content .radio-inline').click(function(){
      $('.embed-demo').addClass('hide');
      var index = $(this).index();
			$('.embed-demo').eq(index).removeClass('hide');
	});

  // 切煥發佈時間
  $('.release-radio-group input').click(function(){
		$('.ep-release-datetime').toggle();
	});

  // 開啟日期選擇
  $('.datepicker-range .btn').click(function(){
    $('.dropdown-datepicker > .dropdown-menu').toggleClass('show');
  });

  // 儲存新增節目，轉換管理頁面
  $('#modal-create-pg .btn-save').click(function(){
     $(location).attr('href','management.html');
  });

  // 儲存新增單集，轉換管理頁面
  $('#modal-create-ep .btn-save').click(function(){
     $(location).attr('href','management-program.html');
  });

  //若標題欄位已填寫，則啟動儲存按鈕
  $("input[name='program-title']").blur(function() {  
    if($(this).val()=="") {
      $('.btn-save').addClass('disabled');
    } else {
      $('.btn-save').removeClass('disabled'); 
    }
  });

  $("input[name='episode-title']").blur(function() {  
    if($(this).val()=="") {
      $('.btn-save').addClass('disabled');
    } else {
      $('.btn-save').removeClass('disabled'); 
    }
  });

  //若申請製作人的欄位，則啟動
  $("input[name='producer-name']").change(function() {  
    if($(this).val()=="") {
      $('.btn-save').addClass('disabled');
    } else {
      $('.btn-save').removeClass('disabled'); 
    }
  });

  //點擊關閉提示按鈕
  $('.alert .btn-close').click(function(){
      $('.alert-wrapper').fadeOut(500);
  });

  //編輯新封面
  $('.btn-upload-cover').click(function(){
      $(this).parents('.upload-cover').nextAll('.modal-upload-cover').removeClass('hide').addClass('in');
  });

  //點擊表情按鈕，跳出動畫
  $('.emoji-btn-wrapper .btn-emoji').click(function(){
      $(this).children('.emoji').addClass('explosion');
      $(this).addClass('active');
  });

  //modal-create-ep 刪除表情按鈕
  var cEmj = $('#modal-create-ep .emoji-btn-setting > .btn-emoji').length;
  $.fn.cDeleteEmj = function(){       
      //刪除表情按鈕
      $('#modal-create-ep .emoji-btn-setting').on('click','.btn-close',function(){
          $(this).parent('.btn-emoji').remove();  

          cEmj = cEmj - 1;

          if (cEmj >= 3) {
              $('#modal-create-ep .btn-add-emoji').addClass('disabled');
          } else {
              $('#modal-create-ep .btn-add-emoji').removeClass('disabled');
          };
          //恢復表情列表的按鈕
          var cEmjBtn = $(this).parent('.btn-emoji').attr('emj-index') - 2;
          $('#modal-create-ep .emoji-list li').eq(cEmjBtn).children('.btn-emoji').removeClass('disabled');

          console.log(cEmjBtn);

          return false;
      });
  };

  $('#modal-create-ep .emoji-btn-setting > .btn-emoji').cDeleteEmj();

  //modal-create-ep 新增表情按鈕
  $.fn.cAddEmj = function(){
      //點擊表情 dropdown 按鈕
      $(this).click(function(){
          $(this).addClass('disabled');

          //加入選擇的表情按鈕
          var cEmj_index = $(this).parent('li').index() + 2;
          $(this).parents('.dropdown-emoji').before('<a href="javascript: void(0)" class="btn btn-default btn-lg btn-emoji tooltip tooltip-top" data-tooltip="笑到飆淚" emj-index="'+cEmj_index+'"><span class="emoji emoji'+cEmj_index+'"></span> 0<button class="btn btn-default btn-icon btn-close" type="button"><i class="ic ic-close"></i></button></a>');

          cEmj = cEmj + 1;

          //超過3個按鈕時讓新增按鈕失效
          if (cEmj >= 3) {
              $('#modal-create-ep .btn-add-emoji').addClass('disabled');
          } else {
              $('#modal-create-ep .btn-add-emoji').removeClass('disabled');
          };
      });
  };

  $('#modal-create-ep .emoji-list .btn-emoji').cAddEmj();

  //modal-edie-ep 刪除表情按鈕
  var eEmj = $('#modal-edit-ep .emoji-btn-setting > .btn-emoji').length;
  $.fn.eDeleteEmj = function(){
      //刪除表情按鈕
      $('#modal-edit-ep .emoji-btn-setting').on('click','.btn-close',function(){
          $(this).parent('.btn-emoji').remove();  

          eEmj = eEmj - 1;

          if (eEmj >= 3) {
              $('#modal-edit-ep .btn-add-emoji').addClass('disabled');
          } else {
              $('#modal-edit-ep .btn-add-emoji').removeClass('disabled');
          };

          //恢復表情列表的按鈕
          var eEmjBtn = $(this).parent('.btn-emoji').attr('emj-index') - 2;
          $('#modal-edit-ep .emoji-list li').eq(eEmjBtn).children('.btn-emoji').removeClass('disabled');

          console.log(eEmjBtn);

          return false;
      });            
  };

  $('#modal-edit-ep .emoji-btn-setting > .btn-emoji').eDeleteEmj();

  //modal-edie-ep 新增表情按鈕
  $.fn.eAddEmj = function(){
      //點擊表情 dropdown 按鈕
      $(this).click(function(){
          $(this).addClass('disabled');

          //加入選擇的表情按鈕
          var eEmj_index = $(this).parent('li').index() + 2;
          $(this).parents('.dropdown-emoji').before('<a href="javascript: void(0)" class="btn btn-default btn-lg btn-emoji tooltip tooltip-top" data-tooltip="笑到飆淚" emj-index="'+eEmj_index+'"><span class="emoji emoji'+eEmj_index+'"></span> 0<button class="btn btn-default btn-icon btn-close" type="button"><i class="ic ic-close"></i></button></a>');

          eEmj = eEmj + 1;

          //超過3個按鈕時讓新增按鈕失效
          if (eEmj >= 3) {
              $('#modal-edit-ep .btn-add-emoji').addClass('disabled');
          } else {
              $('#modal-edit-ep .btn-add-emoji').removeClass('disabled');
          };
      });
  };

  $('#modal-edit-ep .emoji-list .btn-emoji').eAddEmj();

  //選好表情按鈕後，關閉 dropdown
  $('.emoji-list .btn-emoji').click(function(){
      $('.dropdown-emoji > .dropdown-menu').removeClass('show');
  });
       
  //展開我的訂閱
  $('.sb-pg-content li.toggle').click(function() {
      $(this).parents('.list-other-ep').toggleClass('extend');
  });

  //搜尋框輸入文字後跳到搜尋頁
  $('.input-search').keypress(function(e) {
      if(e.which == 13) {
          $(location).attr('href', 'search.html');
      }
  });

  // 切換搜尋結果
  $('.search-nav .nav-tab > li').click(function() {
      $('.search-content').addClass('hide');
      var index = $(this).index();
      $('.search-content').eq(index).removeClass('hide');
  });

  //切換首頁跑馬燈
  $('.carousel-next').click(function() {
      $('.carousel-inner .item:not(.active)').addClass('next');
      setTimeout(function(){
          $('.carousel-inner .item').addClass('left');
      }, 0);
      setTimeout(function(){
          $('.carousel-inner .item.next.left').removeClass('next left').addClass('active');
          $('.carousel-inner .item.active.left').removeClass('active left');
      }, 600);
  });
  $('.carousel-prev').click(function() {
      $('.carousel-inner .item:not(.active)').addClass('prev');
      setTimeout(function(){
          $('.carousel-inner .item').addClass('right');
      }, 0);
      setTimeout(function(){
          $('.carousel-inner .item.prev.right').removeClass('prev right').addClass('active');
          $('.carousel-inner .item.active.right').removeClass('active right');
      }, 600);
  });

  //開關 FAQ 問題
  $('.question').click(function() {
      if($(this).hasClass('active')) {
          $(this).removeClass('active');
      } else {
          $('.question').removeClass('active');
          $(this).addClass('active');
      }            
  });

  //滑順回到頁頂
  $(".back-to-top a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){
        window.location.hash = hash;
      });
    }
  });
});