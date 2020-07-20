class User < ApplicationRecord
    has_secure_password
    validates :password, length: {minimum: 6}, 
    on: :create
    validates :username, presence: true,
    uniqueness: true

    has_many :entries, dependent: :destroy
end
