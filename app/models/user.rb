class User < ApplicationRecord
    has_many :foods, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { minimum: 9, message:'needs to be 9 characters'}
    
end
