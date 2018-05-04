/**
 * Created by Rux-PC on 22/6/2560.
 */
$(function () {

});
function showSuccess(html, reload, redirect) {
    reload = reload || false;
    redirect = redirect || false;
    var close = true;
    var load = false;
    if (reload || redirect) {
        close = false;
        load = true;
    }
    swal({
        title: "บันทึกข้อมูลสำเร็จ",
        text: "<div style='color: #38B449;'>" + html + "</div>",
        html: true,
        type: 'success',
        closeOnConfirm: close,
        showLoaderOnConfirm: load,
    }, function () {
        if (reload) {
            window.location.reload();
        } else if (redirect) {
            window.location.href = redirect;
        }
    });
}
function submitFn(frm) {
    frm = $(frm);
    var url = frm.attr('action'), data = frm.serialize();

    $.ajax({
        url: url,
        type: 'PUT',
        data: data,
        success: function(data) {
            console.log("data:");
            console.log(data);
            if (data.resultCode == 20000) {
                showSuccess(data.resultDescription);
            } else {
                swal(data.resultCode, data.resultDescription, "error");
            }
        },
        error: function (err) {
            console.log("err:");
            console.log(err.responseJSON);
            if (typeof err.responseJSON == 'object') {
                // alert(err.responseJSON.error.message);
                swal(err.responseJSON.error.message, err.responseJSON.error.code, "error");
            }
        }
    });
    return false;
}