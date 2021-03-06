$(function() {
	function buildMessageHTML(message){
        var api_message = (message.image) ? `<img src="${message.image}" >` :``;
		var html = `
		            <div class= "message__right--block--chat__box" data-id=${message.id}>
		              <div class= "message__right--block--chat__box__messages">
			            <p class="the__messages">${message.user_name}
			            </p><p class= "the__messages--info">${message.time}
				        </p>
				        <p class= "lower-message__content">${message.content}
				        </p>
				        <P class= "lower-message__content">${api_message}
				        </p>
				      </div>
				    </div>`
	    return html
	}
  $(function(){
    setInterval(UpdateMessageDisplay, 5000);
  });
  function UpdateMessageDisplay(){
    if($('.message__right--block--chat__box')[0]){
      var message_id = $('.message__right--block--chat__box').last().data('id');
      console.log(message_id)
    } else {
      var message_id = 0
    }
    $.ajax({
      url: location.href,
      type: "GET",
      data: { id: message_id },
      dataType: 'json',
    })
    .done(function(new_message){
      $.each(new_message, function(i,new_message){
        var html = buildMessageHTML(new_message);
        $('.messages').append(html)
      });
    });
  }

	$('#new_message').on('submit', function(e){
	  e.preventDefault();
		var formData = new FormData(this);
    if ($('#message_content').val() !== ""){
	    var href = window.location
      $.ajax({
        url: href,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(userSend_message){
        var html = buildMessageHTML(userSend_message);
        $('.messages').append(html)
        $('#message_content').val('')
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
      .fail(function(){
        alert('error');
      })
      .always(() => {
        $(".form__submit").removeAttr("disabled");
      });
    } else {
      alert("メッセージを入力して下さい")
    }
  });
})