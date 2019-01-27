# README

### Membersテーブル

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
|body|text|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|
|time|timestamp|foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### association
- belongs_to :user
- belongs_to :groups



### Usersテーブル
|Column|Type|Option|
|------|----|------|
|name|char|null: false, unique: true|
|email|char|null: false, unique: true
|password|char|null: false, unique: true


### association
- has_many :messages
- has_many :members
- has_many :groups


### Groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|char|null: false, foreign_key: true|


### association
- has_many :members
- has_many :users








