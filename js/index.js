$(function() {
  //顶部导航栏
  var time = null;
  var time1 = null;
  $("a[data-subnav]").mouseenter(function() {
    $this = $(this);
    var $a = $this.attr("data-subnav");
    time1 = setTimeout(function() {
      $(".subnav_wrap").addClass("chulai");
      $(`div[data-subnav="${$a}"]`).addClass("chulai");
    }, 1);
  });

  $("a[data-subnav]").mouseleave(function() {
    clearTimeout(time);
    $this = $(this);
    var $a = $this.attr("data-subnav");
    time = setTimeout(function() {
      $(".subnav_wrap").removeClass("chulai");
      $(`div[data-subnav="${$a}"]`).removeClass("chulai");
    }, 1);
  });
  $(".subnav_wrap").mouseenter(function() {
    clearTimeout(time);
  });
  $(".subnav_wrap").mouseleave(function() {
    time = setTimeout(function() {
      $(".subnav_wrap").removeClass("chulai");
      $(".subnav_wrapper .subnav_item.chulai").removeClass("chulai");
    }, 1);
  });

  // 点击说话
  $(".role_wrap").click(function() {
    var $role = $("#word_wrap");
    var i = $role.attr("data_tpc");

    $role.children(`:eq(${i})`).css({
      opacity: 0,
      zIndex: 9
    });
    if (i < 5) {
      i++;
    } else {
      i = 0;
    }
    $role.attr("data_tpc", i);
    $role.children(`:eq(${i})`).css({
      opacity: 1,
      zIndex: 13
    });
  });
  // 鼠标移动 神乐一起动
  $(".part_ewm .glass").mousemove(function(e) {
    var left = e.offsetX;
    if (left < 470) {
      $(".role_wrap").css({
        "background-position": "0px 0px"
      });
    } else if (left >= 470 && left <= 565) {
      $(".role_wrap").css({
        "background-position": "-203px 0"
      });
    } else if (left > 565 && left < 615) {
      $(".role_wrap").css({
        "background-position": "-406px 0"
      });
    } else if (left >= 615 && left < 780) {
      $(".role_wrap").css({
        "background-position": "-609px 0"
      });
    } else {
      $(".role_wrap").css({
        "background-position": "-812px 0"
      });
    }
  });

  $("[data-title]").click(function(e) {
    var $tab = $(this);
    $("#shishenBigImg")
      .css({
        display: "block"
      })
      .css({
        opacity: 1
      });
    var $content = "#" + $tab.attr("data-title");
    $tab.siblings().removeClass("on");
    $(".ss_all")
      .css({
        opacity: 0
      })
      .css({
        display: "none"
      });
    $tab.addClass("on");
    $($content)
      .siblings()
      .css({
        opacity: 0
      })
      .css({
        display: "none"
      });
    $($content)
      .css({
        display: "block"
      })
      .css({
        opacity: 1
      });
  });
  $("div.tolist").click(function() {
    console.log(1);
    $(".ss_all")
      .nextAll()
      .css({
        opacity: 0
      })
      .css({
        display: "none"
      });
    $(".ss_all")
      .css({
        display: "block"
      })
      .css({
        opacity: 1
      });
  });

  //式神详情
  //tab 左右箭头
  $(".bigImg .bigImg_btn_right").click(function() {
    var $this = $(this);
    //on前一个的名字
    var $prevname = $("#bigImg_list1 .bigImg_Item .big_container:has('.on')")
      .parent()
      .parent()
      .attr("data-name");

    //判断是否是最后一个
    if ($("#bigImg_list1 .bigImg_Item:last-child").find(".on").length > 0) {
      $("#shishenBigImg .bigImg_wrap .bigImg_btn_left p").html($prevname);

      $("#bigImg_list1   .bigImg_Item:last-child")
        .find("img")
        .removeClass("on");
      $("#bigImg_list1 .bigImg_Item:first-child")
        .find("img")
        .addClass("on");

      var $nextname = $("#bigImg_list1 .bigImg_Item .big_container:has('.on')")
        .parent()
        .parent()
        .next()
        .attr("data-name");

      $("#shishenBigImg .bigImg_wrap .bigImg_btn_right p").html($nextname);
    } else {
      $("#shishenBigImg .bigImg_wrap .bigImg_btn_left p").html(`${$prevname}`);
      $("#bigImg_list1 .bigImg_Item .big_container:has('.on')")
        .children("img")
        .removeClass("on")
        .parent()
        .parent()
        .parent()
        .next()
        .find("img")
        .addClass("on");

      if ($("#bigImg_list1 .bigImg_Item:last-child").find(".on").length > 0) {
        var $firstname = $("#bigImg_list1 .bigImg_Item:first-child").attr(
          "data-name"
        );
        $("#shishenBigImg .bigImg_wrap .bigImg_btn_right p").html($firstname);
      } else {
        var $nextname = $(
          "#bigImg_list1 .bigImg_Item .big_container:has('.on')"
        )
          .parent()
          .parent()
          .next()
          .attr("data-name");
        console.log($nextname);
        $("#shishenBigImg .bigImg_wrap .bigImg_btn_right p").html($nextname);
      }
    }
  });

  //左按钮
  $("#shishenBigImg .bigImg_btn_left").click(function() {
    var $this = $(this);
    var $nextname = $("#bigImg_list1 .bigImg_Item .big_container:has('.on')")
      .parent()
      .parent()
      .attr("data-name");

    if ($("#bigImg_list1   .bigImg_Item:first-child").find(".on").length > 0) {
      $("#shishenBigImg .bigImg_wrap .bigImg_btn_right p").html($nextname);

      $("#bigImg_list1   .bigImg_Item:first-child")
        .find("img")
        .removeClass("on");
      $("#bigImg_list1 .bigImg_Item:last-child")
        .find("img")
        .addClass("on");

      var $lastname = $("#bigImg_list1 .bigImg_Item:last-child")
        .prev()
        .attr("data-name");

      $("#shishenBigImg .bigImg_wrap .bigImg_btn_left p").html($lastname);
    } else {
      $("#shishenBigImg .bigImg_wrap .bigImg_btn_right p").html($nextname);

      $("#bigImg_list1 .bigImg_Item .big_container:has('.on')")
        .children("img")
        .removeClass("on")
        .parent()
        .parent()
        .parent()
        .prev()
        .find("img")
        .addClass("on");

      if ($("#bigImg_list1 .bigImg_Item:first-child").find(".on").length > 0) {
        var $firstname = $("#bigImg_list1 .bigImg_Item:last-child").attr(
          "data-name"
        );
        $("#shishenBigImg .bigImg_wrap .bigImg_btn_left p").html($firstname);
      } else {
        var $prevname = $(
          "#bigImg_list1 .bigImg_Item .big_container:has('.on')"
        )
          .parent()
          .parent()
          .prev()
          .attr("data-name");
        $("#shishenBigImg .bigImg_wrap .bigImg_btn_left p").html($prevname);
      }
    }
  });

  //阴阳师界面

  $(".yys_wrap .bigImg_btn_right").click(function() {
    var $this = $(this);
    //on前一个的名字
    var $prevname = $("#bigImg_list2 .bigImg_Item .big_container:has('.on')")
      .parent()
      .parent()
      .attr("data-name");

    //判断是否是最后一个
    if ($("#bigImg_list2 .bigImg_Item:last-child").find(".on").length > 0) {
      $(".yys_wrap .bigImg_wrap .bigImg_btn_left p").html($prevname);

      $("#bigImg_list2   .bigImg_Item:last-child")
        .find("img")
        .removeClass("on");
      $("#bigImg_list2 .bigImg_Item:first-child")
        .find("img")
        .addClass("on");

      var $nextname = $("#bigImg_list2 .bigImg_Item .big_container:has('.on')")
        .parent()
        .parent()
        .next()
        .attr("data-name");

      $(".yys_wrap .bigImg_wrap .bigImg_btn_right p").html($nextname);
    } else {
      $(".yys_wrap .bigImg_wrap .bigImg_btn_left p").html(`${$prevname}`);
      $("#bigImg_list2 .bigImg_Item .big_container:has('.on')")
        .children("img")
        .removeClass("on")
        .parent()
        .parent()
        .parent()
        .next()
        .find("img")
        .addClass("on");

      if ($("#bigImg_list2 .bigImg_Item:last-child").find(".on").length > 0) {
        var $firstname = $("#bigImg_list2 .bigImg_Item:first-child").attr(
          "data-name"
        );
        $(".yys_wrap .bigImg_wrap .bigImg_btn_right p").html($firstname);
      } else {
        var $nextname = $(
          "#bigImg_list2 .bigImg_Item .big_container:has('.on')"
        )
          .parent()
          .parent()
          .next()
          .attr("data-name");
        console.log($nextname);
        $(".yys_wrap .bigImg_wrap .bigImg_btn_right p").html($nextname);
      }
    }
  });

  //左按钮
  $(".yys_wrap .bigImg_btn_left").click(function() {
    var $this = $(this);
    var $nextname = $("#bigImg_list2 .bigImg_Item .big_container:has('.on')")
      .parent()
      .parent()
      .attr("data-name");

    if ($("#bigImg_list2   .bigImg_Item:first-child").find(".on").length > 0) {
      $(".yys_wrap .bigImg_wrap .bigImg_btn_right p").html($nextname);

      $("#bigImg_list2   .bigImg_Item:first-child")
        .find("img")
        .removeClass("on");
      $("#bigImg_list2 .bigImg_Item:last-child")
        .find("img")
        .addClass("on");

      var $lastname = $("#bigImg_list2 .bigImg_Item:last-child")
        .prev()
        .attr("data-name");

      $(".yys_wrap .bigImg_wrap .bigImg_btn_left p").html($lastname);
    } else {
      $(".yys_wrap .bigImg_wrap .bigImg_btn_right p").html($nextname);

      $("#bigImg_list2 .bigImg_Item .big_container:has('.on')")
        .children("img")
        .removeClass("on")
        .parent()
        .parent()
        .parent()
        .prev()
        .find("img")
        .addClass("on");

      if ($("#bigImg_list2 .bigImg_Item:first-child").find(".on").length > 0) {
        var $firstname = $("#bigImg_list2 .bigImg_Item:last-child").attr(
          "data-name"
        );
        $(".yys_wrap .bigImg_wrap .bigImg_btn_left p").html($firstname);
      } else {
        var $prevname = $(
          "#bigImg_list2 .bigImg_Item .big_container:has('.on')"
        )
          .parent()
          .parent()
          .prev()
          .attr("data-name");
        $(".yys_wrap .bigImg_wrap .bigImg_btn_left p").html($prevname);
      }
    }
  });

  //点yys名字切换图片
  $(".yys_wrap .zhujue_tabs").on("click", "a", function() {
    $this = $(this);
    $this.addClass("on");
    $this.siblings().removeClass("on");
    $name = $this.html();
    $(`[data-name='${$name}']`)
      .siblings()
      .find("img")
      .removeClass("on");
    $(`[data-name='${$name}']`)
      .find("img")
      .addClass("on");

    $next = $(this)
      .next()
      .html();
    $prev = $(this)
      .prev()
      .html();
    $(".yys_wrap .bigImg_btn_left p").html($prev);
    $(".yys_wrap .bigImg_btn_right p").html($next);

    $first = $(".yys_wrap .zhujue_tabs a:first-child").html();

    $last = $(".yys_wrap .zhujue_tabs a:last-child").html();

    if ($this.prev().length == 0) {
      $(".yys_wrap .bigImg_btn_left p").html($last);
    }
    if ($this.next().length == 0) {
      $(".yys_wrap .bigImg_btn_right p").html($first);
    }
  });

  //tab表单页
  $(".shishen_list ul").on("click", "li", function() {
    $this = $(this);
    $id = $this.attr("data-id");
    //隐藏当前
    $(".ss_all")
      .css({
        opacity: 0
      })
      .css({
        display: "none"
      });
    $("#bigImg_list1 .bigImg_Item .big_container:has('.on')")
      .children("img")
      .removeClass("on");

    $(`div[data-id="${$id}"]`)
      .find("img")
      .addClass("on");
    $(".bigImg")
      .css({
        display: "block"
      })
      .css({
        opacity: 1
      });
    $first = $("#bigImg_list1 .bigImg_Item:first-child").attr("data-name");
    $last = $("#bigImg_list1 .bigImg_Item:last-child").attr("data-name");
    $prevname = $(`div[data-id="${$id}"]`)
      .prev()
      .attr("data-name");

    $nextname = $(`div[data-id="${$id}"]`)
      .next()
      .attr("data-name");

    $(".bigImg .bigImg_btn_left p").html($prevname);
    $(".bigImg .bigImg_btn_right p").html($nextname);
    if ($prevname == undefined) {
      $(".bigImg .bigImg_btn_left p").html($last);
    }
    if ($nextname == undefined) {
      $(".bigImg .bigImg_btn_right p").html($first);
    }
  });

  //TAB列表页筛选
  $(".ss_all .shishen_tabs").on("click", "a", function() {
    $this = $(this);
    //按钮样式更改
    $(this)
      .addClass("cur")
      .siblings()
      .removeClass("cur");
    $tab = $this.attr("data-tab");
    console.log($tab);
    $ld = $this.attr("data-ld");
    console.log($ld);
    $mt = $this.attr("data-mt");
    console.log($mt);
    $ul = $(".shishenlist_container .shishen_wrap .shishen_list ul");
    if ($tab == "all" && $ld == "true") {
      console.log("联动");
      $ul.children("[data-ld]").css({
        display: "block"
      });
      $ul.children(":not('[data-ld]')").css({
        display: "none"
      });
    } else if ($tab == "all" && $mt == "true") {
      console.log("呱太");
      $ul.children("[data-mt]").css({
        display: "block"
      });
      $ul.children(":not('[data-mt]')").css({
        display: "none"
      });
    } else if ($tab == "all") {
      console.log("全部");
      $ul.children().css({
        display: "block"
      });
    } else {
      console.log("ssr sr r");
      $ul.children(`[data-tab="${$tab}"]`).css({
        display: "block"
      });
      $ul.children(`:not('[data-tab="${$tab}"]')`).css({
        display: "none"
      });
    }
  });

  // 京都商城滚动条
  // $(".jingdu_box").mouseenter(function() {
  //   var tops = $(document).scrollTop();
  //   $(document).bind("scroll", function() {
  //     $(document).scrollTop(tops);
  //   });
  // });

  // $(".jingdu_box").mouseleave(function() {
  //   $(document).unbind("scroll");
  // });
  // $(".part_jingdu .part_tit .jingdu_box").on("mousewheel",function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   console.log($(e.deltaY));

  // })
  //   function unScroll() {

  //     var top = $(document).scrollTop();

  //     $(document).on('scroll.unable',function (e) {

  //         $(document).scrollTop(top);

  //     })

  // }

  // function removeUnScroll() {

  //   $(document).unbind("scroll.unable");

  // }
  var index = 0;
  $(".jingdu_box ul").on("mousewheel", function(e, delta) {
    console.log(e.delta);

    e.preventDefault();
    if (e.delta > 0) {
      index++;
    } else if (e.delta < 0) {
      index--;
    }
    $(".jingdu_box ul").css({
      left: index
    });
  });
});
