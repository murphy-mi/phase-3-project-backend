class User < ActiveRecord::Base
    has_many :visits
    has_many :locations, through: :visits
    
end