$(function() {
  // ［検索］ボタンクリックで郵便番号検索を実行
  $('#search').click(function() {
    $.ajax({
        type : "GET",
        url:'http://zipcloud.ibsnet.co.jp/api/search?callback=?',
        dataType : "jsonp",
        data: {zipcode: $('#zip').val()},
    })
    // 結果を取得したら…
    .done(function(data) {
      // 中身が空でなければ、その値を［住所］欄に反映
      if (data) {
        var result = data.results[0];
        $('#address').val(result.address1 + result.address2 + result.address3);
  ons.notification.alert({
    message: result.address1 + result.address2 + result.address3
  });
      // 中身が空の場合は、エラーメッセージを反映
      } else {
        $('#address').val('該当する住所が存在しません。');
      }
    });
  });
});