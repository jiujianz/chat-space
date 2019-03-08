$(function() {
	function GroupsMessageHTML(message){
        var api_message = (message.image) ? `<img src="${message.image}" >` :``;
		var html = `
		            <div class= "message__right--block--chat__box">
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
    setInterval(update, 5000);
  });
  function update(){
    if($('.messages')[0]){
      var message_id = $('.messages:last').data('id');
    } else {
      var message_id = 0
    }
    $.ajax({
      url: location.href,
      type: 'GET',
      data: { id: message_id },
      dataType: 'json',
      processData: false,
        contentType: false
    })
    .always(function(group_message){
      $.each(group_message, function(i,group_message){
        GroupsMessageHTML(group_message);
      });
    });
  }

	$('#new_message').on('submit', function(e){
		e.preventDefault();
		  var formData = new FormData(this);
	    var href = window.location.pathname
	    $.ajax({
	      url: href,
	      type: "POST",
	      data: formData,
	      dataType: 'json',
	      processData: false,
          contentType: false
      })
        .done(function(user_message){
        	var html = GroupsMessageHTML(user_message);
        	$('.messages').append(html)
        	$('#message_content').val('')
	        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        })
        .fail(function(){
        	alert('error');
        })
	  })

})