class UserController < ApplicationController

  def new
    render :new
  end

  def create
    user = User.new(username: params["username"], password_digest: BCrypt::Password.create(params["password_digest"]), email: params["email"])
    if params["username"] == "" || params["password"] == ""
      @error = true
      render :new
    else
      user.save
      render :new
    end
  end
end
