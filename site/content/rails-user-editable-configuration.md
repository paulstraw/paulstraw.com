---
title: Rails User-Editable Configuration
date: 02/06/2015 10:33 PM
---
When building out a Rails site with a large admin interface, you'll eventually need to add some system settings that don't relate specifically to any model. This is an Interesting Problem™, because ActiveRecord ties everything in the database to a model. I've recently started using the pattern of a GlobalConfig model to get around this.

First, create a `GlobalConfig` model with the standard generator:

``` bash
rails g model global_config singleton_guard:integer
```

Then, do a bit of class customization:

``` ruby
class GlobalConfig < ActiveRecord::Base
  validates :singleton_guard, presence: true, uniqueness: true, numericality: {equal_to: 1}
  before_validation :set_singleton_guard

private
  def set_singleton_guard
    self.singleton_guard = 1
  end
end
```

Once you've got this base, you need a nice way to actually access the config model from your controllers and views. I added this bit to my ApplicationController:

``` ruby
class ApplicationController < ActionController::Base
  # …
private
  def global_config
    @global_config ||= GlobalConfig.first || GlobalConfig.new

    return @global_config
  end
  helper_method :global_config
end
```

From there, you can simply call `global_config` from any controller or view. By using an instance variable, we ensure that no matter how many times you access the GlobalConfig this way, it will only make one database call per request cycle.

Now that you've got the configuration model all set up, you can add whatever you need (e.g., `rails g migration add_newsletter_signup_cta_to_global_config newsletter_signup_cta:string`). Since it's just a normal Rails model, you can set up forms and validation the same way you would for anything else. Using this pattern, clients can easily swap text, images, toggle site features, and more.
