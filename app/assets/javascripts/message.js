$(function() {
	function buildHTML(message){
        var x = (message.image) ? `<img src="${message.image}" >` :``;
		var html = `
		            <div class= "message__right--block--chat__box">
		              <div class= "message__right--block--chat__box__messages">
			            <p class="the__messages">${message.user_name}
			            </p><p class= "the__messages--info">${message.time}
				        </p>
				        <p class= "lower-message__content">${message.content}
				        </p>
				        <P class= "lower-message__content">${x}
				        </p>
				      </div>
				    </div>`
	    return html
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
        .done(function(data){
        	var html = buildHTML(data);
        	$('.messages').append(html)
        	$('#message_content').val('')
	        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        })
        .fail(function(){
        	alert('error');
        })
	})
})