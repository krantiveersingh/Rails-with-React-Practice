class Item
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Mongoid::Timestamps

  field :name, type: String
  field :description, type: String
end
