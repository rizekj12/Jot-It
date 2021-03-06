class Entry < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true

  belongs_to :user
  belongs_to :mood
end
