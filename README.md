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
|body|text|null: false, foreign_key: true
|image|string|null: false, foreign_key: true
|time|timestamp|foreign_key: true
|group_id|integer|null: false, foreign_key: true
|user_id|integer|null: false, foreign_key: true

### association
- has_many :user
- has_many :user
- belongs_to :body
- belongs_to :group
- belongs_to :user



### Usersテーブル
|Column|Type|Option|
|------|----|------|
|user_name|char|null: false, unique: true
|email|char|null: false, unique: true
|password|char|null: false, unique: true
|group_id|integer|foreign_key: true


### association
- belongs_to :user
- belongs_to :user
- belongs_to :user
- has_many   :group




### Groupsテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|foreign_key: true
|group_name|char|null: false, foreign_key: true


### association
- belongs_to :user
- belongs_to :group



