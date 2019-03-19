if @new_message.present?
  json.array! @new_message.each do |new_message|
    json.content  new_message.content
    json.image  new_message.image.url
    json.user_name  new_message.user.name
    json.group_id  new_message.group.id
    json.time      new_message.created_at.strftime("%Y/%m/%d %H:%M")
    json.id  new_message.id
  end
end