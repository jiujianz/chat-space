FactoryGirl.define do

	factory :user do
      name Faker::JapaneseMedia::DragonBall.character
      password = Faker::Internet.password(8)
      email Faker::Internet.free_email
      password password
      password_confirmation password
    end
end