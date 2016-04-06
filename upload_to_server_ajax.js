function upload_data_to_server(var url, var data) {
    $.ajax({
       type: 'POST',
       url: 'response.php?action=sample2',
       data: 'name=Andrew&nickname=Aramis',
       success: function(data)  {
          $('.results').html(data);
       }
    });
}
