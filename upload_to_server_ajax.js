
/*
    - Реализуйте js функцию, которая будет через ajax загружать данные на сервер
    - функцию привязать к кнопке button
    - данные будут приниматься с input=text
*/

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
