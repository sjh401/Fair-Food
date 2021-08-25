class Food < ApplicationRecord
  belongs_to :locations
  belongs_to :users
  has_many :comments
end
