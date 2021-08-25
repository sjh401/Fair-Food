class Comment < ApplicationRecord
  belongs_to :users
  belongs_to :foods
  belongs_to :comments
end
