if @new_message.present?
  json.arry! @new_message
json.content  @message.content
json.image  @message.image.url
json.user_name  @message.user.name
json.group_id  @message.group.id
json.time      @message.created_at.strftime("%Y/%m/%d %H:%M")
end