class User < ActiveRecord::Base
    has_many :visits
    has_many :locations, through: :visits
    
    def user_visits

        visits.map do |visit|
            {location_id: visit.location_id, visited: visit.visited, want_to_visit: visit.want_to_visit}
        end

    end
end