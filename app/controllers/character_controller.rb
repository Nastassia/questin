class CharacterController < ApplicationController

def index
    # binding.pry
    # player1 = File.open('/app/assets/images/player1.png')
    # send_file "#{Rails.root}/app/assets/images/player1.png", type: 'image/png', disposition: 'inline' ##THIS WORKS##
    @image_data = Base64.encode64(File.open("#{Rails.root}/app/assets/images/player1.png").read)
    # send_data "<img src='data:image/png;base64"+@image_data+"' />", type: 'image/png', disposition: 'inline' ##THIS WORKS##
    # send_data @image_data, type: 'image/png', disposition: 'inline'
    send_file Base64.decode64(@image_data), type: 'image/png', disposition: 'inline' ##THIS WORKS##
end

def create

end

end
