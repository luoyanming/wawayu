$(function() {
	var that = null,
		WWY = {
			init: function() {
				that = this;

				that.headerNavBind();

				that.bannerSliderInit();
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

					nav.addClass(classname);
				});

				navItem.on('mouseout', function() {
					var index = $(this).parent().index(),
						classname = 'nav-' + (index +1);

					if(navClassArr[1] == classname) {
						return false;
					}

					nav.removeClass(classname);
				});
			},

			// banner 轮播图
			bannerSliderInit: function() {
				var bannerSwiper = new Swiper ('.swiper-container', {
				    direction: 'horizontal',
				    loop: true,
				    pagination: '.swiper-pagination',
				    paginationClickable: true,
				    nextButton: '.swiper-button-next',
				    prevButton: '.swiper-button-prev',
				});
			}
		};

	WWY.init();
});
