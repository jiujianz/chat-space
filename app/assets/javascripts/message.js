$(function() {
	function buildHTML(content){
		var html = `<p the__messages>
			          <%= message.user.name %>
			        </p>
			        <p he__messages--info
			          <%= message.created_at.strftime("%Y/%m/%d %H:%M") %>
			        </p>
			        <p users__message
			          <% if message.content.present? %>
			        </P>
			        <P lower-message__content
					  <%= message.content %>
			          <%= image_tag message.image.url, class: 'lower-message__image' if message.image.present? %>
			        </p>`
	    return html
	}
	$('#new_message').on('submit', function(e){
		e.preventDefault();
		var formData = new FormData(this);
	    var href = window.location.href + '/message'
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
        	$('.message__right--block--chat__box__messages').append(html)
        	$('.new_message').val('')
        })
        .fail(function(){
        	alert('error');
        })
	})
})