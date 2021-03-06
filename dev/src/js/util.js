$(function() {
	var that = null,
		WWY = {
			init: function() {
				that = this;

				that.headerNavBind();

				that.bannerSliderInit();

				that.joinusMaskBind();

				that.imgLazyLoadBind();

				that.inputUploadBind();
			},

			// 鼠标移到导航连接上的动画
			// 根据序号判断需要添加什么样式
			// 移除的时候判断是否跟原先页面样式相同
			headerNavBind: function() {
				var nav = $('.nav'),
					navClass = nav.attr('class'),
					navClassArr = navClass.split(' '),
					navItem = nav.find('.nav-item');

				navItem.on('mouseover', function() {
					var index = $(this).parent().index(),
						classname = 'nav-' + (index +1);

					if(navClassArr[1] == classname) {
						return false;
					}

					nav.removeClass(navClassArr[1]);
					nav.addClass(classname);
				});

				navItem.on('mouseout', function() {
					var index = $(this).parent().index(),
						classname = 'nav-' + (index +1);

					if(navClassArr[1] == classname) {
						return false;
					}

					nav.removeClass(classname);
					nav.addClass(navClassArr[1]);
				});
			},

			// banner 轮播图
			bannerSliderInit: function() {
				if($('.swiper-container').length == 0) {
					return false;
				}
				
				var bannerSwiper = new Swiper ('.swiper-container', {
				    direction: 'horizontal',
				    loop: true,
				    pagination: '.swiper-pagination',
				    paginationClickable: true,
				    nextButton: '.swiper-button-next',
				    prevButton: '.swiper-button-prev',
				});
			},

			// 投递简历
			joinusMaskBind: function() {
				var btnRecruit = $(".recruit-item .button"),
					maskRecruit = $(".mask-recruit");

				btnRecruit.on("click", function() {
					maskRecruit.fadeIn(200).addClass("mask-show");
				});

				maskRecruit.on("click", function(n) {
					if("SECTION" == n.target.nodeName && "mask-recruit mask-show" == n.target.className) {
						maskRecruit.removeClass("mask-show").fadeOut(200);
					} 
				});
			},

			// 图片延迟加载
			imgLazyLoadBind: function() {
				if($("img.lazy").length == 0) {
					return false;
				}

				var imglazy = $('img.lazy');
				for(var i = 0; i < imglazy.length; i++) {
					var $this = imglazy.eq(i),
						img = new Image(),
						src = $this.attr('data-original');

					img.src = src;

					that.imgOnload($this, img, src);
				}
			},

			imgOnload: function(obj, img, src) {
				img.onload = function() {
					obj.attr('src', img.src);
				}
			},

			// 文件上传
			inputUploadBind: function() {
				if($('.input-upload').length == 0) {
					return false;
				}

				var inputUpload = $('.input-upload');
				inputUpload.change(function() {
					var $this = $(this),
						str = ($this.val()).split('\\');
						
					$this.parent().parent().find('input[type="text"]').val(str[str.length - 1]);
				});
			}
		};

	WWY.init();
});
