class UserController < ApplicationController

  def new
    render :new
  end

  def create
    if params["username"] == "" || params["password_digest"] == ""
      @error = true
      render :new
    else
      user = User.new(username: params["username"], password_digest: BCrypt::Password.create(params["password_digest"]), email: params["email"])
      user.save
      render :new
    end
  end

  def index
    user = User.find_by(username: params["username"])
    if user && user.authenticate(params["password_digest"])
      session[:user_id] = user.id
      redirect_to '/user/show'
    else
      @logerror = true
      render :new
    end
  end

  def show
    @user = User.find_by(id: session[:user_id])
    if @user
      render :show, {locals: {user: @user, include: :character}}
    else
      render :new
    end
  end

  def logout
    reset_session
    render :new
  end
end
