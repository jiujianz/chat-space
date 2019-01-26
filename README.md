# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### association
- belongs_to :group
- belongs_to :user




###Messagesテーブル

|Column|Type|Option|
|------|----|------|
|body|text|null: false, foreign_key: true
|image|string|null: false, foreign_key: true
|time|timestamp|foreign_key: true
|group_id|integer|null: false, foreign_key: true
|user_id|integer|null: false, foreign_key: true

### associationテーブル
- has_many :user
- has_many :user
- belongs_to :group
- belongs_to :user



### Accountsテーブル
|Column|Type|Option|
|------|----|------|
|name|char|null: false, unique: true
|email|char|null: false, unique: true

### associationテーブル
- belongs_to :name
- belongs_to :email
