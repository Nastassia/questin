class Character < ActiveRecord::Base
  belongs_to :user
  self.has_one :user

end
