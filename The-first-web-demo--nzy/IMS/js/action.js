/**
 * Created by fwf on 17-3-1.
 */

$(document).ready(function () {
    $(".p2").click(function () {
        $(".t1").show();
        $(".t2,.t3,.t4,.t5").hide();
    });

    $(".p3").click(function () {
        $(".t2").show();
        $(".t1,.t3,.t4,.t5").hide();
    });
    $(".p4").click(function () {
        $(".t3").show();
        $(".t2,.t1,.t4,.t5").hide();
    });
    $(".p5").click(function () {
        $(".t4").show();
        $(".t2,.t3,.t1,.t5").hide();
    });
    $(".p6").click(function () {
        $(".t5").show();
        $(".t2,.t3,.t4,.t1").hide();
    });
});