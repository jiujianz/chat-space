$(function() {

var serch_list = $("#user-search-result");

function appendSearchUserResult(user){

	var html = `<div class="chat-group-user clearfix">
				  <p class="chat-group-user__name">${user.name}</p>
				  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
				</div>`
        serch_list.append(html);
}

var add_list = $("#chat-group-users");

function apendUserToGroupMember(name,id){
	var html =  `<div class='chat-group-user clearfix js-chat-member' id=${id}>
				  <input name='group[user_ids][]' type='hidden' value=${id}>
				  <p class='chat-group-user__name'>${name}</p>
				  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
				 </div>`
	    add_list.append(html);
}

function appendErrMsgToHTML(msg){
	var html = `<div id="chat-group-users">${msg}</div>`

	serch_list.append(html);
}
	$("#user-search-field").on("keyup", function() {
		input = $("#user-search-field").val()
		if (input.length == 0) {
      $("#user-search-result").empty();

		}else {
			$.ajax({
				type: 'GET',
				url: '/users',
				data: { keyword: input},
				dataType: 'json'
			})

		.done(function(users) {
			$("#user-search-result").empty();
			if (users.length !==0) {
				users.forEach(function(user){
					appendSearchUserResult(user);
				});
			}
			else {
				appendErrMsgToHTML("一致するユーザーが見つかりません");
			}
		})
		.fail(function() {
			alert('error');
		});
	    }
	});
	$("#user-search-result").on("click",".chat-group-user__btn--add",function() {
    var name = $("a").attr("data-user-name");
        // 追加ボタンのhtmlからattrメソッドでnameを所得
		var id = $("a").attr("data-user-id");
		// 追加ボタンのhtmlからattrメソッドでidを所得
		apendUserToGroupMember(name, id);
		$(this).parent().remove();
	})
	$("#chat-group-users").on("click",".chat-group-user__btn--remove",function() {
		$(this).parent().remove();
	})
});
