# README

### Group_Usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### association
- belongs_to :group
- belongs_to :user




### Messagesテーブル

|Column|Type|Option|
|------|----|------|
|body|text|foreign_key: true|
|image|string|foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### association
- belongs_to :user
- belongs_to :group



### Usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false, unique: true, index :true|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|


### association
- has_many :messages
- has_many :group_users
- has_many :groups, through: :group_users


### Groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false, foreign_key: true|


### association
- has_many :group_users
- has_many :users, through: :group_users








