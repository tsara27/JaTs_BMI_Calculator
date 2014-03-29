class HomeController < ApplicationController

	def index
		
	end

	def print
		@fullname = params[:fullname]
		fn = params[:first_name_input]
		@bmi = params[:bmi]
		@typeweight = params[:typeweight]
		@type = params[:type]
		@suggestion = params[:suggestion]
		@wn = params[:wn]
		render :pdf => "YourBMI-"+fn, :template => "layouts/print.html.erb",:page_size => 'A4'
	end
end
