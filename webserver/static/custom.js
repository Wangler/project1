$(function () {
    $("td[colspan=3]").find("p").hide();
    $("td[colspan=3]").addClass("nopadding");

    $("tr").click(function () {
        var $target = $(this);
        var $detailsTd = $target.find("td[colspan=3]");
        if ($detailsTd.length) {
            $detailsTd.find("p").slideUp();
            $detailsTd.addClass("nopadding");

        } else {
            $detailsTd = $target.next().find("td[colspan=3]");
            $detailsTd.find("p").slideToggle();
            $detailsTd.toggleClass("nopadding");
        }
    });
});